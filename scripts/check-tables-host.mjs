// Native host acceptance for the local CSS candidate. Only a disposable vault.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawn,execFileSync} from 'node:child_process';
import {setTimeout as delay} from 'node:timers/promises';
import {fileURLToPath} from 'node:url';
const repo=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.join(repo,'evidence','tables');fs.mkdirSync(out,{recursive:true});
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'keyline-table-check-'));
const vault=path.join(temp,'Keyline table check'),profile=path.join(temp,'profile');
fs.mkdirSync(path.join(vault,'.obsidian'),{recursive:true});fs.mkdirSync(profile);
const notes={
 'Table.md':`# 经营表现与预测

人民币百万元，百分比除外

| 项目 | 2024A | 2025A | 2026E | 2027E |
| :--- | ---: | ---: | ---: | ---: |
| 营业收入 | 1,280 | 1,520 | 1,800 | 2,100 |
| 营业成本 | -768 | -882 | -1,026 | -1,176 |
| **毛利** | **512** | **638** | **774** | **924** |
| 毛利率 | 40.0% | 42.0% | 43.0% | 44.0% |
| 销售及管理费用 | -256 | -304 | -360 | -420 |
| 研发费用 | -96 | -114 | -135 | -158 |
| **营业利润** | **160** | **220** | **279** | **346** |
| 营业利润率 | 12.5% | 14.5% | 15.5% | 16.5% |

A：实际；E：预测。虚构数据，仅用于样式对照。
`,
 'Ordinary.md':`# 普通文字表格

| 事项（左对齐） | 状态（居中） | 金额（右对齐） |
| :--- | :---: | ---: |
| 校对中文长标题与换行，保持内容完整可读 | 进行中 | 123,456.78 |
| 不自动解释年份 2027E | 待办 | -120.50 |
| 合计 Total | 普通行 | 0 |

正文与列表保持原样。

- 第一项
- 第二项
`,
 'Wide.md':`# 宽表滚动检查

| 项目 | 2024A | 2025A | 2026E | 2027E | 2028E | 2029E | 2030E |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 收入 | 123,456.78 | 234,567.89 | 345,678.90 | 456,789.01 | 567,890.12 | 678,901.23 | 789,012.34 |
| 长中文标签的第二行数据 | 100 | 200 | 300 | 400 | 500 | 600 | 700 |

表格之后的正文仍应留在屏幕内。
`,
};
for(const [file,body] of Object.entries(notes))fs.writeFileSync(path.join(vault,file),body);
fs.writeFileSync(path.join(vault,'.obsidian/app.json'),JSON.stringify({showInlineTitle:false,readableLineLength:true}));
fs.writeFileSync(path.join(vault,'.obsidian/appearance.json'),JSON.stringify({theme:'moonstone'}));
fs.writeFileSync(path.join(vault,'.obsidian/community-plugins.json'),'[]');
fs.writeFileSync(path.join(profile,'obsidian.json'),JSON.stringify({vaults:{b202610250002:{path:vault,ts:Date.now(),open:true}},updateDisabled:true}));
const theme=fs.readFileSync(path.join(repo,'theme.css'),'utf8');
const baseline=execFileSync('git',['show','aad8cbbe2b5e5005a3f505443a393c3408af0ccc:theme.css'],{cwd:repo,encoding:'utf8'});
const report={scope:'Native Obsidian, isolated fictional vault. Mobile CSS/viewport emulation, not physical iOS or Android.',vault,checks:[],shots:[]};
const child=spawn(process.env.OBSIDIAN_TEST_BINARY??'/Applications/Obsidian 2.app/Contents/MacOS/Obsidian',[`--user-data-dir=${profile}`,'--remote-debugging-address=127.0.0.1','--remote-debugging-port=0'],{stdio:['ignore','ignore','pipe']});
let stderr='',ws,serial=0;const pending=new Map();
child.stderr.on('data',b=>stderr=(stderr+b).slice(-12000));
const until=async(fn,label)=>{for(let i=0;i<100;i++){if(child.exitCode!==null)throw Error('Owned instance exited');if(await fn())return;await delay(150);}throw Error(label+' timeout');};
const call=(method,params={})=>new Promise((resolve,reject)=>{const id=++serial;const timer=setTimeout(()=>{pending.delete(id);reject(Error(method+' timeout'));},15000);pending.set(id,{resolve:v=>{clearTimeout(timer);resolve(v)},reject});ws.send(JSON.stringify({id,method,params}));});
const evaluate=async expression=>{const r=await call('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
const scoped=expr=>evaluate(`(async()=>{if(app.vault.adapter.basePath!==${JSON.stringify(vault)})throw Error('Wrong vault');return await (${expr});})()`);
const setCss=async css=>{await scoped(`(()=>{let s=document.getElementById('table-candidate');if(!s){s=document.createElement('style');s.id='table-candidate';document.head.append(s)}s.textContent=${JSON.stringify(css)};return true})()`);await delay(120);};
const open=async(file,mode='preview')=>{await scoped(`app.workspace.getLeaf(false).setViewState({type:'markdown',state:{file:${JSON.stringify(file)},mode:${JSON.stringify(mode)},source:false},active:true})`);await until(()=>scoped(`Boolean(app.workspace.getLeaf(false).view.containerEl.querySelector('${mode==='preview'?'.markdown-preview-view':'.cm-table-widget'} table')?.getBoundingClientRect().width)`),'Table');await delay(200);};
const capture=async(name,cropped=false)=>{
 const params={format:'png',captureBeyondViewport:true};
 if(cropped){const r=await scoped("(()=>{const v=app.workspace.getLeaf(false).view.containerEl,e=v.querySelector('.markdown-preview-sizer'),r=e.getBoundingClientRect(),p=e.querySelectorAll('p'),last=p[p.length-1].getBoundingClientRect();return {x:Math.max(0,r.x-36),y:Math.max(0,r.y-8),width:r.width+72,height:last.bottom-r.y+44,scale:1}})()");params.clip=r;}
 const shot=await call('Page.captureScreenshot',params);fs.writeFileSync(path.join(out,name+'.png'),Buffer.from(shot.data,'base64'));report.shots.push(name);
};
const metrics=()=>scoped(`(()=>{const root=app.workspace.getLeaf(false).view.containerEl;const t=[...root.querySelectorAll('.markdown-preview-view table, .cm-table-widget table')].find(e=>e.getBoundingClientRect().width>0);const cells=[...t.querySelectorAll('th,td')].map(e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();return {text:e.textContent,tag:e.tagName,align:s.textAlign,color:s.color,bg:s.backgroundColor,font:s.fontSize,weight:s.fontWeight,borderLeft:s.borderLeftWidth,borderRight:s.borderRightWidth,borderBottom:s.borderBottomWidth,width:r.width,height:r.height}});const scroll=t.closest('.cm-table-widget,.el-table'),view=t.closest('.cm-scroller,.markdown-preview-view');return {cells,text:t.innerText,tableWidth:t.getBoundingClientRect().width,viewport:innerWidth,viewWidth:view.clientWidth,viewScrollWidth:view.scrollWidth,scroll:scroll?{client:scroll.clientWidth,full:scroll.scrollWidth,overflow:getComputedStyle(scroll).overflowX}:null,html:t.outerHTML}})()`);
try{
 await until(()=>stderr.match(/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)/),'Endpoint');
 const port=stderr.match(/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)/)[1];
 let target;await until(async()=>{target=(await(await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(p=>p.type==='page'&&p.url==='app://obsidian.md/index.html');return target;},'Page');
 ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j});
 ws.onmessage=e=>{const m=JSON.parse(e.data),p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result);}};
 await until(()=>evaluate("typeof app!=='undefined'&&app.workspace?.layoutReady"),'Workspace');
 await scoped("(()=>{app.setting.close();app.workspace.leftSplit.collapse();app.workspace.rightSplit.collapse();return true})()");
 await call('Emulation.setDeviceMetricsOverride',{width:1100,height:900,deviceScaleFactor:2,mobile:false});
 await setCss(theme);
 for(const color of ['light','dark'])for(const mode of ['preview','source']){
  await scoped(`(()=>{document.body.classList.toggle('theme-light',${color==='light'});document.body.classList.toggle('theme-dark',${color==='dark'});return true})()`);
  await open('Table.md',mode);
  const m=await metrics();
  assert.equal(m.cells.length,45);
  assert.ok(m.text.includes('-768'),'Negative signs must remain literal');
  assert.ok(m.cells.every(c=>c.borderLeft==='0px'&&c.borderRight==='0px'));
  assert.ok(m.cells.filter(c=>c.tag==='TH').every(c=>c.color==='rgb(255, 255, 255)'&&c.bg===(color==='light'?'rgb(20, 45, 78)':'rgb(38, 62, 90)')));
  assert.ok(['left','start'].includes(m.cells[0].align));assert.ok(['right','end'].includes(m.cells[1].align));
  assert.ok(m.tableWidth>=590&&m.tableWidth<=620);
  await capture('implemented-'+color+'-'+mode,mode==='preview');
  delete m.html;report.checks.push({kind:'desktop',color,mode,...m});console.log('Passed desktop '+color+' '+mode);
 }
 await scoped("(()=>{document.body.classList.add('theme-light');document.body.classList.remove('theme-dark');return true})()");
 await open('Ordinary.md');
 const ordinary=await metrics();assert.equal(ordinary.cells[1].align,'center');assert.ok(['right','end'].includes(ordinary.cells[2].align));
 assert.equal(ordinary.cells[6].weight,ordinary.cells[9].weight);assert.equal(ordinary.cells[6].bg,ordinary.cells[9].bg);
 const outside=()=>scoped("(()=>{const e=app.workspace.getLeaf(false).view.containerEl;return [...e.querySelectorAll('h1,p,li')].map(n=>{const s=getComputedStyle(n);return [n.textContent,s.color,s.fontSize,s.lineHeight,s.padding,s.margin]})})()");
 const after=await outside();await setCss(baseline);const before=await outside();assert.deepEqual(after,before);await setCss(theme);
 await capture('implemented-ordinary');report.checks.push({kind:'ordinary-alignment-no-semantic-guess-outside-unchanged'});
 // All wider-table overflow must stay within the table's native scroll area.
 for(const width of [390,768])for(const color of ['light','dark'])for(const mode of ['preview','source']){
  await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});
  await scoped(`(()=>{document.body.classList.add('is-mobile');document.body.classList.toggle('is-phone',${width<768});document.body.classList.toggle('is-tablet',${width>=768});document.querySelectorAll('.mod-root .workspace-tabs,.mod-root .workspace-split').forEach(e=>e.classList.add('mod-visible'));document.body.classList.toggle('theme-light',${color==='light'});document.body.classList.toggle('theme-dark',${color==='dark'});return true})()`);
  await open('Wide.md',mode);const m=await metrics();
  assert.ok(m.viewScrollWidth<=m.viewWidth+1,`Note overflow ${width} ${mode}: ${m.viewScrollWidth}/${m.viewWidth}`);
  assert.ok(m.scroll&&m.scroll.full>m.scroll.client,'Wide table must scroll');
  const scrolled=await scoped("(()=>{const t=[...app.workspace.getLeaf(false).view.containerEl.querySelectorAll('.markdown-preview-view table,.cm-table-widget table')].find(e=>e.getBoundingClientRect().width>0),e=t.closest('.cm-table-widget,.el-table');e.scrollLeft=e.scrollWidth;return e.scrollLeft>0})()");assert.ok(scrolled);
  await scoped("(()=>{const t=[...app.workspace.getLeaf(false).view.containerEl.querySelectorAll('.markdown-preview-view table,.cm-table-widget table')].find(e=>e.getBoundingClientRect().width>0);t.closest('.cm-table-widget,.el-table').scrollLeft=0;return true})()");
  await capture(`implemented-mobile-${width}-${color}-${mode}`);delete m.html;report.checks.push({kind:'mobile-emulation',width,color,mode,...m});console.log('Passed mobile '+width+' '+color+' '+mode);
 }
 await call('Emulation.setDeviceMetricsOverride',{width:1100,height:900,deviceScaleFactor:2,mobile:false});
 await scoped("(()=>{document.body.classList.remove('is-mobile','is-phone','is-tablet','theme-dark');document.body.classList.add('theme-light');return true})()");
 await open('Table.md','source');
 const headerBefore=await scoped("document.querySelector('.cm-table-widget th').getBoundingClientRect().height");
 const point=await scoped("(()=>{const e=document.querySelector('.cm-table-widget th .table-cell-wrapper'),r=e.getBoundingClientRect();return{x:r.x+r.width/2,y:r.y+r.height/2}})()");
 await call('Input.dispatchMouseEvent',{type:'mousePressed',...point,button:'left',clickCount:1});await call('Input.dispatchMouseEvent',{type:'mouseReleased',...point,button:'left',clickCount:1});
 await until(()=>scoped("Boolean(document.querySelector('.cm-table-widget th .cm-editor.cm-focused'))"),'Header editor focus');
 const edit=await scoped("(()=>{const e=document.querySelector('.cm-table-widget th .cm-editor.cm-focused .cm-content'),s=getComputedStyle(e);return{color:s.color,caret:s.caretColor,selection:getComputedStyle(e.closest('th'),'::after').borderColor}})()");
 assert.equal(edit.color,'rgb(255, 255, 255)');assert.equal(edit.caret,'rgb(255, 255, 255)');
 await call('Input.insertText',{text:'测试'});await until(()=>scoped("app.workspace.getLeaf(false).view.editor.getValue().includes('测试')"),'Edit reaches note');await capture('implemented-header-edit');
 const headerAfter=await scoped("document.querySelector('.cm-table-widget th').getBoundingClientRect().height");
 assert.ok(Math.abs(headerAfter-headerBefore)<1,`Header row jumped on edit: ${headerBefore} -> ${headerAfter}`);
 await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});await call('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
 const tab=await scoped("document.activeElement.closest('th')?.cellIndex");assert.equal(tab,1);
 // Restore only the owned fixture through Obsidian, then check raw source mode.
 await scoped(`app.workspace.getLeaf(false).view.editor.setValue(${JSON.stringify(notes['Table.md'])})`);
 await scoped("app.workspace.getLeaf(false).setViewState({type:'markdown',state:{file:'Table.md',mode:'source',source:true},active:true})");await delay(300);
 const raw=await scoped("(()=>{const e=document.querySelector('.HyperMD-table-row-0');return e?{color:getComputedStyle(e).color,text:e.textContent}:null})()");
 assert.ok(raw&&raw.color!=='rgb(255, 255, 255)');report.checks.push({kind:'native-edit-header-caret-tab-and-source-mode',edit,raw});
 await until(()=>Object.entries(notes).every(([name,body])=>fs.readFileSync(path.join(vault,name),'utf8')===body),'Original fixture data restored');
 report.status='passed';
}catch(e){report.status='failed';report.error=e.stack;process.exitCode=1;if(ws?.readyState===1){try{await capture('implemented-failure');fs.writeFileSync(path.join(out,'implemented-failure-dom.json'),JSON.stringify(await metrics(),null,2));}catch{}}}
finally{ws?.close();child.kill('SIGTERM');await Promise.race([new Promise(r=>child.once('exit',r)),delay(2000)]);if(child.exitCode===null)child.kill('SIGKILL');fs.writeFileSync(path.join(out,'implemented-checks.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({status:report.status,checks:report.checks.length,error:report.error}));}
