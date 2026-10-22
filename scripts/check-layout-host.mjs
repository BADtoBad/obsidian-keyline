// Native Obsidian regression in a fictional Vault. Never connects to a user's host.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawn, execFileSync} from 'node:child_process';
import {setTimeout as delay} from 'node:timers/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root=fileURLToPath(new URL('../',import.meta.url));
const out=path.resolve(process.argv[2]||path.join(os.tmpdir(),'keyline-layout-results'));
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'keyline-layout-host-'));
const vault=path.join(tmp,'Fictional layout regression'),profile=path.join(tmp,'profile');
fs.mkdirSync(path.join(vault,'.obsidian'),{recursive:true});fs.mkdirSync(profile);fs.mkdirSync(out,{recursive:true});
const plugin=process.env.KEYLINE_TEST_PLUGIN;
if(plugin){
 assert.equal(JSON.parse(fs.readFileSync(path.join(plugin,'manifest.json'))).id,'with-keyline');
 fs.mkdirSync(path.join(vault,'.obsidian/plugins/with-keyline'),{recursive:true});
 for(const f of ['main.js','styles.css','manifest.json'])fs.copyFileSync(path.join(plugin,f),path.join(vault,'.obsidian/plugins/with-keyline',f));
}
const note='# Code layout\n\n```sql\nSET @snapshot = CONCAT(\'SELECT TABLE_NAME, COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA IS NOT NULL ORDER BY TABLE_NAME;\');\nTABLE_NAME VARCHAR(255);\n\nSET @snapshot = NULL;\nPREPARE statement FROM @snapshot;\nEXECUTE statement;\nDEALLOCATE PREPARE statement;\n```\n\nText after code.\n\n- A list item\n  - A nested item\n- [ ] A task\n';
fs.writeFileSync(path.join(vault,'Code.md'),note);
fs.mkdirSync(path.join(vault,'Personal'));fs.writeFileSync(path.join(vault,'Personal/Notes.md'),'# Fictional notes\n');
for(let i=1;i<=60;i++)fs.writeFileSync(path.join(vault,`Sample ${String(i).padStart(2,'0')}.md`),'Fictional sidebar layout sample.\n');
fs.writeFileSync(path.join(vault,'.obsidian/app.json'),JSON.stringify({showInlineTitle:false,readableLineLength:true}));
fs.writeFileSync(path.join(vault,'.obsidian/community-plugins.json'),'[]');
fs.writeFileSync(path.join(profile,'obsidian.json'),JSON.stringify({vaults:{b202610220000025:{path:vault,ts:Date.now(),open:true}},updateDisabled:true}));
const baseline=execFileSync('git',['show','0fdd570d3a0373e42be1466137587c71056b4b19:theme.css'],{cwd:root,encoding:'utf8'});
const next=fs.readFileSync(path.join(root,'theme.css'),'utf8');
const report={vault,profile,startedAt:new Date().toISOString(),themeSha256:createHash('sha256').update(next).digest('hex'),checks:[],limitation:'Native macOS host only; not physical Windows, Linux, iOS or Android acceptance.'};
const child=spawn(process.env.KEYLINE_TEST_APP||'/Applications/Obsidian 2.app/Contents/MacOS/Obsidian',[`--user-data-dir=${profile}`,'--remote-debugging-address=127.0.0.1','--remote-debugging-port=0'],{stdio:['ignore','ignore','pipe']});
let stderr='',ws,serial=0;const pending=new Map();child.stderr.on('data',b=>stderr=(stderr+b).slice(-10000));
const until=async(fn,label)=>{for(let i=0;i<120;i++){if(child.exitCode!==null)throw Error('Owned host exited');const result=await fn();if(result)return result;await delay(200);}throw Error(label+' timed out');};
const call=(method,params={})=>new Promise((resolve,reject)=>{const id=++serial,timer=setTimeout(()=>{pending.delete(id);reject(Error(method+' timeout'));},15000);pending.set(id,{resolve:x=>{clearTimeout(timer);resolve(x)},reject});ws.send(JSON.stringify({id,method,params}));});
const evaluate=async expression=>{const r=await call('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
const scoped=expression=>evaluate(`(async()=>{if(typeof app==='undefined'||app.vault.adapter.basePath!==${JSON.stringify(vault)})throw Error('Wrong Vault');return await (${expression});})()`);
const css=async text=>{await scoped(`(()=>{let s=document.getElementById('test-theme');if(!s){s=document.createElement('style');s.id='test-theme';document.head.append(s)}s.textContent=${JSON.stringify(text)};return true})()`);await delay(150);};
const shot=async name=>{const r=await call('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(out,name+'.png'),Buffer.from(r.data,'base64'));};
const rows=()=>scoped("[...document.querySelectorAll('.HyperMD-codeblock')].map(e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();return {class:e.className,text:e.textContent,radius:s.borderRadius,x:r.x,width:r.width,height:r.height}})");
const searchMetrics=()=>scoped("(()=>{const root=document.querySelector('.workspace-leaf-content[data-type=file-explorer]'),header=root.querySelector('.nav-header'),search=root.querySelector('.search-input-container'),first=root.querySelector('.nav-folder-title'),r=search.getBoundingClientRect(),f=first.getBoundingClientRect();return{overlap:Math.max(0,r.bottom-f.top),gap:f.top-r.bottom,headerHeight:header.getBoundingClientRect().height,hidden:getComputedStyle(search).display==='none',value:search.querySelector('input').value,focused:document.activeElement===search.querySelector('input')}})()");
const toggleSearch=()=>scoped("(()=>{document.querySelector('.workspace-leaf-content[data-type=file-explorer] .nav-action-button:has(.lucide-search)').click();return true})()");
const prose=()=>scoped("[...document.querySelectorAll('.cm-line:not(.HyperMD-codeblock)')].map(e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();return{text:e.textContent,x:r.x,w:r.width,h:r.height,padding:s.padding,margin:s.margin,lineHeight:s.lineHeight}})");
try{
 const port=await until(()=>stderr.match(/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)/)?.[1],'Endpoint');
 const target=await until(async()=>(await(await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(x=>x.type==='page'&&x.url==='app://obsidian.md/index.html'),'Page');
 ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j});ws.onmessage=e=>{const m=JSON.parse(e.data),p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result);}};
 await until(()=>evaluate("typeof app!=='undefined'&&app.workspace?.layoutReady"),'Workspace');
 await scoped("(()=>{[...document.querySelectorAll('.modal button')].find(b=>/信任仓库作者并启用插件|Trust author and enable plugins/i.test(b.textContent))?.click();app.setting.close();const s=document.createElement('style');s.textContent='*,*::before,*::after{transition:none!important;animation:none!important}';document.head.append(s);return true})()");
 report.host=await scoped("({userAgent:navigator.userAgent})");
 await scoped("(async()=>{app.workspace.leftSplit.collapse();app.workspace.rightSplit.collapse();await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath('Code.md'));return true})()");
 for(const enabled of plugin?[false,true]:[false]){
  if(enabled)await scoped("(async()=>{await app.plugins.enablePlugin('with-keyline');return true})()");
  for(const dark of [false,true])for(const width of [800,1280]){
   await call('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});
   await scoped(`(()=>{document.body.classList.toggle('theme-dark',${dark});document.body.classList.toggle('theme-light',${!dark});app.workspace.leftSplit.collapse();return true})()`);
   for(const mode of ['live','source','reading']){
    await scoped(`app.workspace.getLeaf(false).setViewState({type:'markdown',state:{file:'Code.md',mode:'${mode==='reading'?'preview':'source'}',source:${mode==='source'}},active:true})`);
    if(mode!=='reading')await scoped("(()=>{const e=app.workspace.getLeaf(false).view.editor;e.setCursor(3,0);e.focus();return true})()");
    await delay(200);await css(baseline);const before=mode==='reading'?null:await prose();await css(next);
    if(mode==='reading'){
     const pre=await scoped("(()=>{const e=document.querySelector('.markdown-preview-view pre');return {radius:getComputedStyle(e).borderRadius,text:e.textContent}})()");
     assert.equal(pre.radius,'10px');assert.ok(pre.text.includes('DEALLOCATE PREPARE statement;'));
    }else{
     const r=await rows();assert.ok(r.length>=9,'Missing code lines');
     for(const e of r){const begin=e.class.includes('codeblock-begin'),end=e.class.includes('codeblock-end');assert.equal(e.radius,begin?'10px 10px 0px 0px':end?'0px 0px 10px 10px':'0px');assert.ok(Math.abs(e.x-r[0].x)<.1,'Code edge shifted');}
     assert.deepEqual(await prose(),before,'Unrelated paragraph/list geometry changed');
     assert.equal(await scoped('app.workspace.getLeaf(false).view.editor.getValue()'),note);
    }
    report.checks.push({kind:'code-and-prose',plugin:enabled,dark,width,mode});
    if(width===800&&mode!=='source')await shot(`${enabled?'with-plugin':'theme-only'}-${dark?'dark':'light'}-${mode}`);
   }
   await scoped("app.workspace.getLeaf(false).setViewState({type:'markdown',state:{file:'Code.md',mode:'source',source:false},active:true})");
   await scoped("(()=>{app.workspace.leftSplit.expand();return true})()");await delay(200);
   let m=await searchMetrics();if(!m.hidden)await toggleSearch();
   await css(baseline);const closedBefore=(await searchMetrics()).headerHeight;await css(next);assert.equal((await searchMetrics()).headerHeight,closedBefore,'Closed header changed');
   await toggleSearch();await delay(200);await css(baseline);assert.ok((await searchMetrics()).overlap>0,'Old overlap not reproduced');
   await css(next);m=await searchMetrics();assert.equal(m.overlap,0);assert.ok(m.gap>=0);
   await scoped("(()=>{document.querySelector('.workspace-leaf-content[data-type=file-explorer] input[type=search]').focus();return true})()");
   await call('Input.insertText',{text:'Sample 01'});await delay(250);assert.equal((await searchMetrics()).value,'Sample 01');assert.equal((await searchMetrics()).focused,true);
   await scoped("(()=>{const e=document.querySelector('.workspace-leaf-content[data-type=file-explorer] input[type=search]');e.select();return true})()");
   await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Backspace',code:'Backspace',windowsVirtualKeyCode:8});await call('Input.dispatchKeyEvent',{type:'keyUp',key:'Backspace',code:'Backspace',windowsVirtualKeyCode:8});await delay(250);assert.equal((await searchMetrics()).value,'');
   await scoped("(()=>{const e=document.querySelector('.workspace-leaf-content[data-type=file-explorer] .nav-files-container');e.scrollTop=e.scrollHeight;return true})()");
   const scroll=await scoped("(()=>{const e=document.querySelector('.workspace-leaf-content[data-type=file-explorer] .nav-files-container');return e.scrollTop})()");assert.ok(scroll>0);
   await scoped("(()=>{document.querySelector('.workspace-leaf-content[data-type=file-explorer] .nav-files-container').scrollTop=0;return true})()");
   await shot(`${enabled?'with-plugin':'theme-only'}-${dark?'dark':'light'}-search-${width}`);
   report.checks.push({kind:'native-search',plugin:enabled,dark,width,metrics:m,scroll});await toggleSearch();
  }
 }
 assert.equal(fs.readFileSync(path.join(vault,'Code.md'),'utf8'),note,'Source file changed');
 report.status='passed';
}catch(e){report.status='failed';report.error=e.stack;process.exitCode=1;if(ws?.readyState===WebSocket.OPEN)try{await shot('failure')}catch{}}
finally{ws?.close();child.kill('SIGTERM');await Promise.race([new Promise(r=>child.once('exit',r)),delay(2000)]);if(child.exitCode===null)child.kill('SIGKILL');fs.writeFileSync(path.join(out,'result.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({status:report.status,error:report.error,checks:report.checks.length,output:out}));}
