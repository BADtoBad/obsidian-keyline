// Real Obsidian renderer + its own mobile CSS classes, in a disposable Vault.
// This is layout emulation on macOS, NOT an iOS/Android device certification.
// The user authorized this isolated Obsidian debug capture workflow.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import { spawn, execFileSync } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.resolve(process.argv[2] || path.join(os.tmpdir(), 'keyline-mobile-results'));
const sandbox = fs.mkdtempSync(path.join(os.tmpdir(), 'keyline-mobile-host-'));
const vault = path.join(sandbox, 'Mobile layout test'), profile = path.join(sandbox, 'profile');
fs.mkdirSync(path.join(vault, '.obsidian'), { recursive: true });
fs.mkdirSync(profile); fs.mkdirSync(output, { recursive: true });
const notes = {
  '移动阅读测试：长标题与属性在手机上也应清晰易读': '这是虚构测试笔记，用来检查中文长标题、属性和正文间距。',
  'Mobile reading and properties — a deliberately long title for small screens': 'A fictional test note for long titles, properties and comfortable reading.'
};
const data = '---\nstatus: draft\ncount: 4\ntime: 2026-10-19\ncomplete: false\ntags:\n  - mobile\n  - reading\nurl: https://example.com/a-long-reference-path-for-mobile-layout-checks\n---\n\n';
for (const [name, text] of Object.entries(notes)) fs.writeFileSync(path.join(vault, name + '.md'), data +
  `## Reading\n\n${text}\n\n**Important** and ==highlighted== text.\n\n> [!note] Native callout\n> A note inside the page.\n\n- [ ] Review this note\n- A nested list\n  - Keep the indentation usable\n\n` +
  Array.from({ length: 12 }, (_, i) => `${i + 1}. ${text}`).join('\n\n') + '\n\nFINAL VISIBLE LINE\n');
fs.writeFileSync(path.join(vault, '.obsidian/app.json'), JSON.stringify({ showInlineTitle: true, propertiesInDocument: 'visible', readableLineLength: true }));
fs.writeFileSync(path.join(vault, '.obsidian/community-plugins.json'), '[]');
fs.writeFileSync(path.join(profile, 'obsidian.json'), JSON.stringify({ vaults: { e024000000000001: { path: vault, ts: Date.now(), open: true } }, updateDisabled: true }));
const baseline = execFileSync('git', ['show', '290d2849de716b48c64fe9b6d36946bb29422583:theme.css'], { cwd: root, encoding: 'utf8' });
const next = fs.readFileSync(path.join(root, 'theme.css'), 'utf8');
const report = { startedAt: new Date().toISOString(), vault, profile, output, themeSha256: createHash('sha256').update(next).digest('hex'), limitation: 'Native Obsidian on macOS with mobile CSS classes and emulated viewport. Not physical iOS, Android, touch keyboard, VoiceOver or WebKit acceptance.', checks: [] };
const child = spawn(process.env.KEYLINE_TEST_APP || '/Applications/Obsidian 2.app/Contents/MacOS/Obsidian', [`--user-data-dir=${profile}`, '--remote-debugging-address=127.0.0.1', '--remote-debugging-port=0'], { stdio: ['ignore', 'ignore', 'pipe'] });
report.pid = child.pid;
let stderr = '', ws, serial = 0; const pending = new Map();
child.stderr.on('data', b => { stderr = (stderr + b).slice(-10000); });
const until = async (fn, name) => { for (let i = 0; i < 120; i++) { if (child.exitCode !== null) throw Error('Host exited'); try { const result = await fn(); if (result) return result; } catch {} await delay(200); } throw Error(name + ' timed out'); };
const call = (method, params = {}) => new Promise((resolve, reject) => { const id = ++serial; const timeout = setTimeout(() => { pending.delete(id); reject(Error(method + ' timeout')); }, 20000); pending.set(id, { resolve: r => { clearTimeout(timeout); resolve(r); }, reject }); ws.send(JSON.stringify({ id, method, params })); });
const evaluate = async expression => { const r = await call('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) throw Error(JSON.stringify(r.exceptionDetails)); return r.result.value; };
const scoped = expression => evaluate(`(async()=>{if(typeof app==='undefined'||app.vault.adapter.basePath!==${JSON.stringify(vault)})throw Error('Refusing non-test Vault');return await (${expression});})()`);
const css = async text => { await scoped(`(()=>{let s=document.getElementById('keyline-mobile-test');if(!s){s=document.createElement('style');s.id='keyline-mobile-test';document.head.append(s)}s.textContent=${JSON.stringify(text)};return true})()`); await delay(180); };
const screenshot = async name => { const r = await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }); fs.writeFileSync(path.join(output, name + '.png'), Buffer.from(r.data, 'base64')); };
try {
  const port = await until(() => stderr.match(/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)/)?.[1], 'Endpoint');
  const page = await until(async () => (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(p => p.type === 'page' && p.url === 'app://obsidian.md/index.html'), 'Page');
  ws = new WebSocket(page.webSocketDebuggerUrl); await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  ws.onmessage = e => { const m = JSON.parse(e.data), p = pending.get(m.id); if (p) { pending.delete(m.id); m.error ? p.reject(Error(JSON.stringify(m.error))) : p.resolve(m.result); } };
  await until(() => evaluate("typeof app!=='undefined'&&app.workspace.layoutReady"), 'Workspace');
  report.hostVersion = await scoped("({appVersion: typeof appVersion !== 'undefined' ? appVersion : app.version ?? null, userAgent: navigator.userAgent})");
  await scoped(`(async()=>{app.setting.close();app.workspace.leftSplit.collapse();app.workspace.rightSplit.collapse();await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath(${JSON.stringify(Object.keys(notes)[0] + '.md')}));return true})()`);
  await until(() => scoped("Boolean(document.querySelector('.metadata-property-key-input'))"), 'Properties');
  // Freeze transitions in the test host so theme swaps compare settled values.
  await scoped(`(()=>{const s=document.createElement('style');s.id='keyline-test-motion';s.textContent='*,*::before,*::after{transition:none !important;animation:none !important}';document.head.append(s);return true})()`);
  const measureDesktop = () => scoped(`(()=>{const props=['color','backgroundColor','fontSize','lineHeight','border','padding','margin','boxShadow'];return [...document.querySelectorAll('.workspace *')].filter(e=>e.getBoundingClientRect().height>0).map(e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();return {class:e.className,rect:[r.x,r.y,r.width,r.height].map(n=>Math.round(n*10)/10),style:props.map(k=>s[k])}})})()`);
  for (const width of [390, 1440]) for (const theme of ['light', 'dark']) {
    await call('Emulation.setDeviceMetricsOverride', { width, height: 960, deviceScaleFactor: 1, mobile: false });
    await scoped(`(()=>{document.body.classList.toggle('theme-light',${theme === 'light'});document.body.classList.toggle('theme-dark',${theme === 'dark'});return true})()`);
    await delay(400);
    await css(baseline); const before = await measureDesktop(); await css(next); const after = await measureDesktop();
    assert.deepEqual(after, before, 'Desktop geometry/styles changed');
    report.checks.push({ kind: 'desktop-identical', width, theme, elements: before.length });
  }
  for (const [language, note] of [['zh',Object.keys(notes)[0]],['en',Object.keys(notes)[1]]])
  for (const theme of ['light', 'dark']) for (const width of [320, 390, 430, 768]) for (const mode of ['preview', 'source']) {
    const height = width === 768 ? 1024 : 844;
    await call('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
    // Mobile's runtime marks the active tab group visible; the desktop host does not.
    // Add that state explicitly without substituting a fake note/property component.
    await scoped(`(async()=>{document.body.classList.add('is-mobile');document.body.classList.toggle('is-phone',${width < 768});document.body.classList.toggle('is-tablet',${width >= 768});document.querySelectorAll('.mod-root .workspace-tabs,.mod-root .workspace-split').forEach(e=>e.classList.add('mod-visible'));document.body.style.setProperty('--safe-area-inset-bottom','34px');document.body.classList.toggle('theme-light',${theme === 'light'});document.body.classList.toggle('theme-dark',${theme === 'dark'});const leaf=app.workspace.getLeaf(false);await leaf.setViewState({type:'markdown',state:{file:${JSON.stringify(note + '.md')},mode:${JSON.stringify(mode)},source:false},active:true});return true})()`);
    await css(next);
    await until(() => scoped(`Boolean(app.workspace.getLeaf(false).view.containerEl.querySelector('${mode === 'preview' ? '.markdown-preview-view' : '.cm-scroller'} .metadata-property-key-input'))`), 'Visible metadata');
    const metrics = await scoped(`(()=>{const view=app.workspace.getLeaf(false).view.containerEl,scope=view.querySelector('${mode === 'preview' ? '.markdown-preview-view' : '.cm-scroller'}'),box=scope.querySelector('.metadata-container'),title=scope.querySelector('.inline-title');const rect=e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height,right:r.right,bottom:r.bottom}};return {viewport:innerWidth,scope:rect(scope),metadata:rect(box),title:{...rect(title),font:getComputedStyle(title).fontSize},fields:[...box.querySelectorAll('input:not([type=checkbox]),.metadata-input-longtext')].map(e=>({rect:rect(e),border:getComputedStyle(e).borderWidth,shadow:getComputedStyle(e).boxShadow,background:getComputedStyle(e).backgroundColor,font:getComputedStyle(e).fontSize})),rows:[...box.querySelectorAll('.metadata-property')].map(e=>rect(e)),sizerPadding:getComputedStyle(scope.querySelector('${mode === 'preview' ? '.markdown-preview-sizer' : '.cm-sizer'}')).paddingBottom,metadataHtml:box.outerHTML}})()`);
    const name = `${language}-${theme}-${mode}-${width}`; await screenshot(name);
    fs.writeFileSync(path.join(output, name + '.json'), JSON.stringify(metrics, null, 2));
    assert.ok(metrics.metadata.x >= -1 && metrics.metadata.right <= width + 1, 'Metadata outside viewport');
    assert.ok(metrics.fields.every(f => f.border === '0px' && f.shadow === 'none' && f.background === 'rgba(0, 0, 0, 0)'), 'Field chrome remains');
    assert.ok(metrics.rows.every(r => r.h >= 44), 'Small touch rows');
    assert.ok(metrics.fields.every(f => f.rect.right <= metrics.metadata.right + 1), 'Field overflow');
    assert.ok(parseFloat(metrics.title.font) < 30, 'Long title did not shrink');
    if (mode === 'source') assert.equal(metrics.sizerPadding, '0px', 'Desktop end spacer remains');
    delete metrics.metadataHtml;
    report.checks.push({ kind: 'mobile-css', language, theme, width, mode, metrics });
    console.log('Passed ' + name);
  }
  // Larger text and constrained height are layout checks, not a native keyboard test.
  await call('Emulation.setDeviceMetricsOverride', { width: 390, height: 420, deviceScaleFactor: 1, mobile: false });
  await scoped(`(()=>{document.body.style.setProperty('--font-text-size','22px');document.body.classList.add('is-phone');document.body.classList.remove('is-tablet');app.workspace.getLeaf(false).view.editor?.refresh();return true})()`);
  await delay(200); await screenshot('large-text-short-viewport');
  const large = await scoped(`(()=>{const box=app.workspace.getLeaf(false).view.containerEl.querySelector('.cm-scroller .metadata-container');return {width:box.getBoundingClientRect().width,fields:[...box.querySelectorAll('input:not([type=checkbox]),.metadata-input-longtext')].map(e=>({font:parseFloat(getComputedStyle(e).fontSize),right:e.getBoundingClientRect().right})),title:parseFloat(getComputedStyle(app.workspace.getLeaf(false).view.containerEl.querySelector('.cm-scroller .inline-title')).fontSize)}})()`);
  assert.ok(large.fields.every(f => f.font >= 22 && f.right <= 391)); assert.ok(large.title > 30);
  report.checks.push({ kind: 'large-text-short-viewport', ...large });

  await call('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: false });
  await scoped(`(()=>{document.body.style.setProperty('--font-text-size','16px');const s=app.workspace.getLeaf(false).view.containerEl.querySelector('.cm-scroller');s.scrollTop=0;return true})()`);
  await delay(200);
  // Focus/edit the native component and verify the actual test note on disk.
  const edit = await scoped(`(()=>{const e=app.workspace.getLeaf(false).view.containerEl.querySelector('.cm-scroller [data-property-key="status"] .metadata-input-longtext');e.focus();const r=document.createRange();r.selectNodeContents(e);const s=getSelection();s.removeAllRanges();s.addRange(r);return {focused:document.activeElement===e,rowFocus:getComputedStyle(e.closest('.metadata-property')).boxShadow}})()`);
  assert.ok(edit.focused && edit.rowFocus !== 'none', 'Missing native focus indication');
  await screenshot('property-focus');
  await call('Input.insertText', { text: 'reviewed' });
  await scoped('document.activeElement.blur()');
  await until(() => fs.readFileSync(path.join(vault,Object.keys(notes)[1]+'.md'),'utf8').includes('status: reviewed'), 'Property persisted');
  report.checks.push({ kind: 'native-property-edit-persisted', ...edit });
  const collapsed = await scoped(`(()=>{const b=app.workspace.getLeaf(false).view.containerEl.querySelector('.cm-scroller .metadata-container');b.querySelector('.metadata-properties-heading').click();return b.classList.contains('is-collapsed')})()`);
  assert.equal(collapsed,true);
  await delay(250); await screenshot('properties-collapsed');
  await scoped(`app.workspace.getLeaf(false).view.containerEl.querySelector('.cm-scroller .metadata-properties-heading').click()`);
  report.checks.push({ kind: 'native-properties-collapse-expand' });
  for(const mode of ['preview','source']) {
    await scoped(`app.workspace.getLeaf(false).setViewState({type:'markdown',state:{file:${JSON.stringify(Object.keys(notes)[1]+'.md')},mode:'${mode}',source:false},active:true})`);
    const end = await until(async()=>{
      await scoped(`(()=>{const s=app.workspace.getLeaf(false).view.containerEl.querySelector('${mode==='preview'?'.markdown-preview-view':'.cm-scroller'}');s.scrollTop=s.scrollHeight;return true})()`);
      await delay(100);
      return scoped(`(()=>{const s=app.workspace.getLeaf(false).view.containerEl.querySelector('${mode==='preview'?'.markdown-preview-view':'.cm-scroller'}'),e=[...s.querySelectorAll('${mode==='preview'?'p':'.cm-line'}')].find(e=>e.textContent==='FINAL VISIBLE LINE');if(!e)return false;const r=e.getBoundingClientRect(),b=s.getBoundingClientRect();return r.top>=b.top&&r.bottom<=b.bottom?{top:r.top,bottom:r.bottom,viewBottom:b.bottom}:false})()`);
    }, 'Last line reachable');
    await screenshot('last-line-'+mode);
    report.checks.push({kind:'last-line-reachable',mode,...end});
  }
  await call('Emulation.setDeviceMetricsOverride',{width:844,height:390,deviceScaleFactor:1,mobile:false});
  await scoped(`(()=>{const s=app.workspace.getLeaf(false).view.containerEl.querySelector('.cm-scroller');s.scrollTop=0;return true})()`);
  await delay(200);await screenshot('phone-landscape');
  const landscape=await scoped(`(()=>{const s=app.workspace.getLeaf(false).view.containerEl.querySelector('.cm-scroller');return {width:s.clientWidth,scrollWidth:s.scrollWidth}})()`);
  assert.ok(landscape.scrollWidth<=landscape.width+1);
  report.checks.push({kind:'phone-landscape',...landscape});
  report.status = 'passed-awaiting-visual-review';
} catch (e) {
  report.status = 'failed'; report.error = e.message; process.exitCode = 1;
  if (ws?.readyState === WebSocket.OPEN) try {
    await screenshot('failure');
    fs.writeFileSync(path.join(output,'failure-dom.json'),JSON.stringify(await scoped(`({body:document.body.outerHTML,leaf:app.workspace.getLeaf(false).getViewState()})`),null,2));
  } catch {}
} finally {
  ws?.close(); child.kill('SIGTERM');
  report.stopped = await Promise.race([new Promise(r => child.once('exit', () => r(true))), delay(4000).then(() => false)]);
  if (!report.stopped && child.exitCode === null) child.kill('SIGKILL');
  fs.writeFileSync(path.join(output, 'result.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ status: report.status, output, error: report.error?.slice(0,1200) }));
}
