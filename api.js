const $=s=>document.querySelector(s),h=(t,a={},...k)=>{const e=document.createElement(t);for(const[x,v]of Object.entries(a))x==='class'?e.className=v:x.startsWith('on')?e[x]=v:e.setAttribute(x,v);e.append(...k);return e};
const api=async(p,o={})=>{const r=await fetch(p,o),j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(j.error||'Er ging iets mis.');return j};
let user=null,mode='signup',kind='email';
const open=e=>$(e).classList.add('on'),shut=()=>{document.querySelectorAll('.ov').forEach(o=>o.classList.remove('on'));stopRain();$('#wb').replaceChildren()};
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=shut);
addEventListener('keydown',e=>{if(e.key==='Escape')shut()});
