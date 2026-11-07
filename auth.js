function auth(m){mode=m;open('#auth');if(!matchMedia('(prefers-reduced-motion:reduce)').matches){size();loop();fl=setInterval(()=>{const a=$('#auth');a.classList.remove('flash');void a.offsetWidth;a.classList.add('flash')},5000+Math.random()*3000)}view1()}
function view1(){$('#v1').hidden=false;$('#v2').hidden=true;$('#ae1').textContent='';const s=mode==='signup';$('#tS').className=s?'on':'';$('#tL').className=s?'':'on';$('#at').textContent=s?'Maak je account':'Welkom terug';$('#as').textContent=s?'Kies hoe je wilt beginnen.':'Log in en ga verder.'}
$('#tS').onclick=()=>{mode='signup';view1()};$('#tL').onclick=()=>{mode='login';view1()};
document.querySelectorAll('[data-p]').forEach(b=>b.onclick=async()=>{const p=b.dataset.p;
if(p==='google'||p==='apple')try{await api('/api/oauth/'+p)}catch(e){$('#ae1').textContent=e.message}
else{kind=p;$('#v1').hidden=true;$('#v2').hidden=false;const s=mode==='signup';$('#fn').hidden=!s;$('#fe').hidden=p==='rain';$('#fr').hidden=p!=='rain';$('#sub').textContent=s?'Account maken':'Inloggen';$('#ae2').textContent=''}});
$('#bk').onclick=view1;
$('#v2').onsubmit=async e=>{e.preventDefault();const em=kind==='rain'?$('#ar').value.trim()+'@rainslidermail':$('#ae').value,name=kind==='rain'&&!$('#an').value?$('#ar').value:$('#an').value;
try{user=await api(mode==='signup'?'/api/signup':'/api/login',{method:'POST',body:JSON.stringify({name,email:em,password:$('#ap').value})});shut();who()}catch(x){$('#ae2').textContent=x.message}};
