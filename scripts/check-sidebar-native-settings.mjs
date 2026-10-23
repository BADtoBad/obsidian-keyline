// Follow-up diagnosis of the unresolved left-edge report. Only a disposable Vault.
// Do not inject a clipping conflict: exercise native Obsidian settings instead.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {setTimeout as delay} from 'node:timers/promises';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const root=fileURLToPath(new URL('../',import.meta.url));
const out=path.resolve(process.argv[2]||path.join(os.tmpdir(),'keyline-native-settings-results'));
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'keyline-edge-followup-'));
const vault=path.join(tmp,'Fictional edge diagnosis'),profile=path.join(tmp,'profile');
fs.mkdirSync(path.join(vault,'.obsidian'),{recursive:true});fs.mkdirSync(profile);fs.mkdirSync(out,{recursive:true});
if(process.env.KEYLINE_CORE_ASAR){
  if(path.basename(process.env.KEYLINE_CORE_ASAR)!=='obsidian-1.14.5.asar')throw Error('Only the identified public core update is allowed');
  fs.copyFileSync(process.env.KEYLINE_CORE_ASAR,path.join(profile,'obsidian-1.14.5.asar'));
}
fs.writeFileSync(path.join(vault,'Start.md'),'# Sidebar diagnosis\nOnly fictional content.\n');
fs.writeFileSync(path.join(vault,'.obsidian/community-plugins.json'),'[]');
fs.writeFileSync(path.join(profile,'obsidian.json'),JSON.stringify({vaults:{d202610230000026:{path:vault,ts:Date.now(),open:true}},updateDisabled:true}));
const theme=fs.readFileSync(process.env.KEYLINE_THEME_FILE||path.join(root,'theme.css'),'utf8');
const report={startedAt:new Date().toISOString(),themeSha256:createHash('sha256').update(theme).digest('hex'),vault,checks:[],exceptions:[],limitation:'Disposable macOS host, official core, installed Electron runtime. No third-party snippets, personal Vault, or reporter hardware; this is not a cross-platform or alternate-Electron certification.'};
const child=spawn('/Applications/Obsidian 2.app/Contents/MacOS/Obsidian',[`--user-data-dir=${profile}`,'--remote-debugging-address=127.0.0.1','--remote-debugging-port=0'],{stdio:['ignore','ignore','pipe']});
let stderr='',ws,serial=0;const pending=new Map();child.stderr.on('data',b=>stderr=(stderr+b).slice(-10000));
const until=async(fn,label)=>{for(let i=0;i<120;i++){if(child.exitCode!==null)throw Error('Owned host exited');const r=await fn();if(r)return r;await delay(150);}throw Error(label+' timed out');};
const call=(method,params={})=>new Promise((resolve,reject)=>{const id=++serial,timer=setTimeout(()=>{pending.delete(id);reject(Error(method+' timed out'));},15000);pending.set(id,{resolve:r=>{clearTimeout(timer);resolve(r)},reject:e=>{clearTimeout(timer);reject(e)}});ws.send(JSON.stringify({id,method,params}));});
const evaluate=async expression=>{const r=await call('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
const scoped=expression=>evaluate(`(async()=>{if(typeof app==='undefined'||app.vault.adapter.basePath!==${JSON.stringify(vault)})throw Error('Wrong Vault');return await (${expression});})()`);
const style=async(id,text)=>{await scoped(`(()=>{let e=document.getElementById(${JSON.stringify(id)});if(!e){e=document.createElement('style');e.id=${JSON.stringify(id)};document.head.append(e)}e.textContent=${JSON.stringify(text)};return true})()`);await delay(120);};
const shot=async name=>{const r=await call('Page.captureScreenshot',{format:'png'});if(name)fs.writeFileSync(path.join(out,name+'.png'),Buffer.from(r.data,'base64'));return r.data;};
const geometry=()=>scoped(`(()=>{const d=app.workspace.leftSplit.containerEl,r=d.getBoundingClientRect(),s=getComputedStyle(d),p=getComputedStyle(d,'::before'),ribbon=app.workspace.leftRibbon.containerEl,rs=getComputedStyle(ribbon);return {
  body:document.body.className,workspace:app.workspace.containerEl.className,viewport:{width:innerWidth,height:innerHeight,dpr:devicePixelRatio},
  card:{left:r.left+parseFloat(p.left),right:r.right-parseFloat(p.right),top:r.top+parseFloat(p.top),bottom:r.bottom-parseFloat(p.bottom)},
  dock:{x:r.x,width:r.width,overflow:s.overflow,transform:s.transform,contain:s.contain,z:s.zIndex},
  ribbon:{class:ribbon.className,width:ribbon.getBoundingClientRect().width,declared:rs.getPropertyValue('--ribbon-width'),background:rs.backgroundColor,before:getComputedStyle(ribbon,'::before').backgroundColor,z:rs.zIndex},
  paint:{background:p.backgroundColor,shadow:p.boxShadow,offset:s.getPropertyValue('--ncl-sidebar-ribbon-offset'),clip:p.clipPath},
  ancestors:[...function*(e){while(e){yield e;e=e.parentElement}}(d.parentElement)].map(e=>{const s=getComputedStyle(e);return{class:e.className,overflow:s.overflow,clip:s.clipPath,contain:s.contain}})
}})()`);
async function pixels(name){
  const g=await geometry(),actual=await shot(name);
  await style('diagnostic-shadow-control','body:not(.is-mobile) .workspace > .mod-sidedock.mod-left-split:not(.is-sidedock-collapsed)::before{box-shadow:none!important}');
  const clean=await shot();await style('diagnostic-shadow-control','');
  const edges=await scoped(`(async()=>{const load=async data=>{const im=new Image();im.src='data:image/png;base64,'+data;await im.decode();const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const ctx=c.getContext('2d');ctx.drawImage(im,0,0);return ctx.getImageData(0,0,c.width,c.height)};const a=await load(${JSON.stringify(actual)}),b=await load(${JSON.stringify(clean)}),r=${JSON.stringify(g.card)},scale=a.width/innerWidth;
    const edge=x=>{let changed=0,samples=0;for(let y=Math.ceil((r.top+80)*scale);y<Math.floor((r.bottom-80)*scale);y++)for(let xx=Math.floor((x-1)*scale);xx<Math.ceil((x+1)*scale);xx++){if(xx<0||xx>=a.width||y<0||y>=a.height)continue;const i=(y*a.width+xx)*4;const delta=Math.max(...[0,1,2].map(k=>Math.abs(a.data[i+k]-b.data[i+k])));samples++;if(delta>1)changed++}return{changed,samples}};return{left:edge(r.left),right:edge(r.right)};})()`);
  return {geometry:g,edges,leftVisible:edges.left.changed>100,rightVisible:edges.right.changed>100};
}
try{
  const port=await until(()=>stderr.match(/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)/)?.[1],'Endpoint');
  const target=await until(async()=>(await(await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(x=>x.type==='page'&&x.url==='app://obsidian.md/index.html'),'Page');
  ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j});ws.onmessage=e=>{const m=JSON.parse(e.data),p=pending.get(m.id);if(m.method==='Runtime.exceptionThrown')report.exceptions.push(m.params.exceptionDetails);if(p){pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result)}};
  await call('Runtime.enable');await until(()=>evaluate("typeof app!=='undefined'&&app.workspace?.layoutReady"),'Workspace');
  await scoped("(()=>{app.setting.close();return true})()");
  await style('diagnostic-theme',theme);
  await scoped("(async()=>{await app.workspace.getLeaf(false).openFile(app.vault.getAbstractFileByPath('Start.md'));app.workspace.leftSplit.expand();app.workspace.rightSplit.collapse();return true})()");
  report.host=await scoped("({userAgent:navigator.userAgent,apiVersion:require('electron').ipcRenderer.sendSync('version')})");
  if(process.env.KEYLINE_CORE_ASAR&&report.host.apiVersion!=='1.14.5')throw Error('Requested core update not active: '+report.host.apiVersion);
  for(const dark of [false,true])for(const translucent of [false,true])for(const zoom of [0.8,1,1.25]){
    const label=`${dark?'dark':'light'}-${translucent?'translucent':'opaque'}-zoom${zoom}`;
    await scoped(`(()=>{app.changeTheme('${dark?'obsidian':'moonstone'}');app.customCss.setTranslucency(${translucent});require('electron').webFrame.setZoomFactor(${zoom});app.vault.setConfig('showRibbon',true);app.updateRibbonDisplay();app.workspace.leftSplit.expand();return true})()`);await delay(500);
    const result=await pixels(label);report.checks.push({label,...result});console.log(JSON.stringify({label,edges:result.edges,card:result.geometry.card,ribbon:result.geometry.ribbon}));
  }
  await scoped("(()=>{require('electron').webFrame.setZoomFactor(1);app.customCss.setTranslucency(false);app.changeTheme('moonstone');return true})()");
  for(const width of [640,800,1280])for(const ribbon of [true,false]){
    await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});
    await scoped(`(()=>{app.vault.setConfig('showRibbon',${ribbon});app.updateRibbonDisplay();app.workspace.leftSplit.collapse();return true})()`);await delay(300);
    await scoped("(()=>{app.workspace.leftSplit.expand();return true})()");await delay(500);
    await until(()=>scoped(`(()=>{app.vault.setConfig('showRibbon',${ribbon});app.updateRibbonDisplay();return document.body.classList.contains('show-ribbon')===${ribbon}})()`),'Ribbon state');await delay(400);
    const label=`width${width}-ribbon${ribbon}-reopened`,result=await pixels(label);report.checks.push({label,...result});console.log(JSON.stringify({label,edges:result.edges,card:result.geometry.card,ribbon:result.geometry.ribbon}));
  }
  report.status=report.checks.every(x=>x.leftVisible&&x.rightVisible)?'not-reproduced-in-native-settings':'edge-loss-observed';
  if(process.env.EXPECT_EDGE_DEFECT!=='1'&&report.status!=='not-reproduced-in-native-settings')throw Error('One or more card edges are hidden');
}catch(e){report.status='diagnosis-failed';report.error=e.stack;process.exitCode=1;if(ws?.readyState===WebSocket.OPEN)try{await shot('failure')}catch{}}
finally{ws?.close();child.kill('SIGTERM');await Promise.race([new Promise(r=>child.once('exit',r)),delay(2000)]);if(child.exitCode===null)child.kill('SIGKILL');report.completedAt=new Date().toISOString();fs.writeFileSync(path.join(out,'result.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({status:report.status,error:report.error,checks:report.checks.length,output:out}));}
