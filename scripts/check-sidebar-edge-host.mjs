// Sidebar clipping regression in a disposable fictional Vault, never a personal host.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawn, execFileSync} from 'node:child_process';
import {setTimeout as delay} from 'node:timers/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root=fileURLToPath(new URL('../',import.meta.url));
const out=path.resolve(process.argv[2]||path.join(os.tmpdir(),'keyline-sidebar-edge-results'));
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'keyline-sidebar-edge-'));
const vault=path.join(tmp,'Fictional sidebar test'),profile=path.join(tmp,'profile');
fs.mkdirSync(path.join(vault,'.obsidian'),{recursive:true});fs.mkdirSync(profile);fs.mkdirSync(out,{recursive:true});
const plugin=process.env.KEYLINE_TEST_PLUGIN;
if(plugin){
  assert.equal(JSON.parse(fs.readFileSync(path.join(plugin,'manifest.json'))).id,'with-keyline');
  fs.mkdirSync(path.join(vault,'.obsidian/plugins/with-keyline'),{recursive:true});
  for(const f of ['main.js','styles.css','manifest.json'])fs.copyFileSync(path.join(plugin,f),path.join(vault,'.obsidian/plugins/with-keyline',f));
}
const note='# Sidebar regression\nA fictional note.\n';
fs.writeFileSync(path.join(vault,'Start.md'),note);
fs.mkdirSync(path.join(vault,'Research'));
for(let i=1;i<=60;i++)fs.writeFileSync(path.join(vault,`Research/Note ${String(i).padStart(2,'0')}.md`),'Fictional test content.\n');
fs.writeFileSync(path.join(vault,'.obsidian/community-plugins.json'),'[]');
fs.writeFileSync(path.join(vault,'.obsidian/appearance.json'),JSON.stringify({theme:'moonstone'}));
fs.writeFileSync(path.join(profile,'obsidian.json'),JSON.stringify({vaults:{b202610230000026:{path:vault,ts:Date.now(),open:true}},updateDisabled:true}));
const baseline=execFileSync('git',['show','f4a5b2d:theme.css'],{cwd:root,encoding:'utf8'});
const next=fs.readFileSync(path.join(root,'theme.css'),'utf8');
const report={startedAt:new Date().toISOString(),themeSha256:createHash('sha256').update(next).digest('hex'),checks:[],exceptions:[],
  limitation:'Native macOS Obsidian host with an explicit outer-dock clipping conflict. This reproduces the reported appearance, not the reporter\'s unidentified environment.'};
const child=spawn(process.env.KEYLINE_TEST_APP||'/Applications/Obsidian 2.app/Contents/MacOS/Obsidian',[`--user-data-dir=${profile}`,'--remote-debugging-address=127.0.0.1','--remote-debugging-port=0'],{stdio:['ignore','ignore','pipe']});
let stderr='',ws,serial=0;const pending=new Map();child.stderr.on('data',b=>stderr=(stderr+b).slice(-10000));
const until=async(fn,label)=>{for(let i=0;i<120;i++){if(child.exitCode!==null)throw Error('Owned host exited');const r=await fn();if(r)return r;await delay(150);}throw Error(label+' timed out');};
const call=(method,params={})=>new Promise((resolve,reject)=>{const id=++serial,timer=setTimeout(()=>{pending.delete(id);reject(Error(method+' timeout'));},15000);pending.set(id,{resolve:r=>{clearTimeout(timer);resolve(r)},reject:e=>{clearTimeout(timer);reject(e)}});ws.send(JSON.stringify({id,method,params}));});
const evaluate=async expression=>{const r=await call('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
const scoped=expression=>evaluate(`(async()=>{if(typeof app==='undefined'||app.vault.adapter.basePath!==${JSON.stringify(vault)})throw Error('Wrong Vault');return await (${expression});})()`);
const style=async(id,text)=>{await scoped(`(()=>{let e=document.getElementById(${JSON.stringify(id)});if(!e){e=document.createElement('style');e.id=${JSON.stringify(id)};document.head.append(e)}e.textContent=${JSON.stringify(text)};return true})()`);await delay(120);};
const css=text=>style('test-theme',text);
const shot=async name=>{const s=await call('Page.captureScreenshot',{format:'png'});if(name)fs.writeFileSync(path.join(out,name+'.png'),Buffer.from(s.data,'base64'));return s.data;};
const geometry=()=>scoped(`(()=>{const d=document.querySelector('.workspace > .mod-left-split'),r=d.getBoundingClientRect(),s=getComputedStyle(d),p=getComputedStyle(d,'::before');const box=e=>{const b=e.getBoundingClientRect();return{x:b.x,y:b.y,width:b.width,height:b.height}};return{
  dock:box(d),ribbon:box(document.querySelector('.workspace > .workspace-ribbon.mod-left')),overflow:s.overflow,
  card:{left:r.left+parseFloat(p.left),right:r.right-parseFloat(p.right),top:r.top+parseFloat(p.top),bottom:r.bottom-parseFloat(p.bottom)},
  rows:[...d.querySelectorAll('.tree-item-self')].map(box),handle:box(d.querySelector('.workspace-leaf-resize-handle')),
  footer:box(document.querySelector('.workspace-sidedock-vault-profile')),
  controls:[...document.querySelectorAll('.workspace-ribbon .clickable-icon,.mod-left-split .sidebar-toggle-button,.workspace-sidedock-vault-profile .clickable-icon')].map(e=>{const b=e.getBoundingClientRect();return {...box(e),hit:b.width>0&&b.height>0&&e.contains(document.elementFromPoint(b.x+b.width/2,b.y+b.height/2))}})
}})()`);
async function edgePixels(name){
  const g=await geometry(),actual=await shot(name);
  await style('test-outline-control','body:not(.is-mobile) .workspace > .mod-sidedock.mod-left-split:not(.is-sidedock-collapsed)::before {box-shadow:none!important}');
  const clean=await shot();await style('test-outline-control','');
  return scoped(`(async()=>{const load=async data=>{const im=new Image();im.src='data:image/png;base64,'+data;await im.decode();const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const ctx=c.getContext('2d');ctx.drawImage(im,0,0);return ctx.getImageData(0,0,c.width,c.height)};
    const a=await load(${JSON.stringify(actual)}),b=await load(${JSON.stringify(clean)}),r=${JSON.stringify(g.card)},scale=a.width/innerWidth;
    const edge=x=>{let changed=0,samples=0;for(let y=Math.ceil((r.top+75)*scale);y<Math.floor((r.bottom-75)*scale);y++)for(let xx=Math.floor((x-1)*scale);xx<Math.ceil((x+1)*scale);xx++){const i=(y*a.width+xx)*4;const delta=Math.max(...[0,1,2].map(k=>Math.abs(a.data[i+k]-b.data[i+k])));samples++;if(delta>1)changed++;}return{changed,samples}};
    return{left:edge(r.left),right:edge(r.right)};})()`);
}
const check=(kind,data={})=>{report.checks.push({kind,...data});console.log('PASS',kind,JSON.stringify(data));};
try{
  const port=await until(()=>stderr.match(/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)/)?.[1],'Endpoint');
  const target=await until(async()=>(await(await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(x=>x.type==='page'&&x.url==='app://obsidian.md/index.html'),'Page');
  ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j});ws.onmessage=e=>{const m=JSON.parse(e.data),p=pending.get(m.id);if(m.method==='Runtime.exceptionThrown')report.exceptions.push(m.params.exceptionDetails);if(p){pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result)}};
  await call('Runtime.enable');await until(()=>evaluate("typeof app!=='undefined'&&app.workspace?.layoutReady"),'Workspace');
  await scoped("(()=>{[...document.querySelectorAll('.modal button')].find(b=>/信任仓库作者并启用插件|Trust author and enable plugins/i.test(b.textContent))?.click();app.setting.close();return true})()");
  await style('test-animation','*,*::before,*::after{animation:none!important;transition:none!important}');
  await scoped("(async()=>{await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath('Start.md'));app.workspace.leftSplit.expand();app.workspace.rightSplit.collapse();return true})()");
  report.host=await scoped('navigator.userAgent');
  for(const enabled of plugin?[false,true]:[false]){
    await css(next);if(enabled)await scoped("app.plugins.enablePlugin('with-keyline')");
    for(const dark of [false,true])for(const width of [800,1280]){
      await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});
      await scoped(`(()=>{app.changeTheme('${dark?'obsidian':'moonstone'}');app.workspace.leftSplit.expand();document.body.classList.add('show-ribbon');return true})()`);await delay(200);
      const label=`${enabled?'with-plugin':'theme-only'}-${dark?'dark':'light'}-${width}`;
      await style('test-compatibility','');await css(baseline);const normalBefore=await geometry();await css(next);const normalAfter=await geometry();
      assert.deepEqual(normalAfter,normalBefore,'Normal sidebar geometry, style or hit targets changed');
      check('normal-layout-unchanged',{enabled,dark,width});
      // A common CSS integration pattern clips workspace split containers.
      // Only the card segment drawn outside the dock is lost, matching the report.
      await style('test-compatibility','.workspace-split{overflow:hidden}');await css(baseline);
      const old=await edgePixels(label+'-before');assert.equal(old.left.changed,0,'Baseline left clipping was not reproduced');assert.ok(old.right.changed>100,'Baseline right edge should remain visible');
      await css(next);const after=await edgePixels(label+'-after');
      if(process.env.EXPECT_EDGE_DEFECT==='1'){assert.equal(after.left.changed,0);check('baseline-defect-confirmed',{enabled,dark,width,old,after});continue;}
      assert.ok(after.left.changed>100,'Left card edge still clipped');assert.ok(after.right.changed>100,'Right card edge disappeared');
      const fixed=await geometry();assert.equal(fixed.overflow,'visible');assert.deepEqual(fixed,normalAfter,'Conflict repair altered geometry or control hit targets');
      check('left-edge-restored-right-edge-preserved',{enabled,dark,width,old,after});
      // Inner file scrolling must still be contained despite visible outer overflow.
      const scroll=await scoped("(()=>{const v=app.workspace.getLeavesOfType('file-explorer')[0].view;v.fileItems['Research'].setCollapsed(false);const e=document.querySelector('.nav-files-container');e.scrollTop=e.scrollHeight;return {top:e.scrollTop,overflow:getComputedStyle(e).overflowY,client:e.clientHeight,height:e.scrollHeight}})()");
      assert.ok(scroll.top>0);assert.match(scroll.overflow,/auto|scroll/);
      await scoped("(()=>{document.querySelector('.nav-files-container').scrollTop=0;return true})()");check('inner-scroll-contained',{enabled,dark,width,...scroll});
      await style('test-compatibility','');
      for(const state of ['collapsed','no-ribbon']){
        await scoped(`(()=>{app.workspace.leftSplit.${state==='collapsed'?'collapse':'expand'}();document.body.classList.toggle('show-ribbon',${state==='collapsed'});return true})()`);await delay(200);
        const measure=()=>scoped("[...document.querySelectorAll('.workspace > .workspace-ribbon,.workspace > .mod-left-split,.workspace-sidedock-vault-profile')].map(e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return{rect:[r.x,r.y,r.width,r.height],display:s.display,overflow:s.overflow,background:s.backgroundColor}})");
        await css(baseline);const a=await measure();await css(next);assert.deepEqual(await measure(),a);check(state+'-unchanged',{enabled,dark,width});
      }
    }
  }
  assert.equal(report.exceptions.length,0);assert.equal(fs.readFileSync(path.join(vault,'Start.md'),'utf8'),note);
  report.status=process.env.EXPECT_EDGE_DEFECT==='1'?'baseline-reproduced':'passed';
}catch(e){report.status='failed';report.error=e.stack;process.exitCode=1;if(ws?.readyState===WebSocket.OPEN)try{await shot('failure')}catch{}}
finally{ws?.close();child.kill('SIGTERM');await Promise.race([new Promise(r=>child.once('exit',r)),delay(2000)]);if(child.exitCode===null)child.kill('SIGKILL');report.completedAt=new Date().toISOString();fs.writeFileSync(path.join(out,'result.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({status:report.status,error:report.error,checks:report.checks.length,output:out}));}
