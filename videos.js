function who(){const w=$('#who');w.replaceChildren();if(user){w.append(h('span',{class:'m'},user.name+'  '),h('button',{class:'btn g',onclick:async()=>{await api('/api/logout',{method:'POST'});user=null;who()}},'Uitloggen'))}else w.append(h('button',{class:'btn g',onclick:()=>auth('signup')},'Inloggen'))}
async function list(){const v=await api('/api/videos'),g=$('#grid');g.replaceChildren();
if(!v.length)return g.append(h('div',{class:'empty'},'Nog geen video\'s. Upload de eerste video op SocialRain.'));
v.forEach(x=>g.append(h('button',{class:'card',onclick:()=>watch(x.id)},h('video',{src:'/media/'+x.file+'#t=0.5',preload:'metadata',muted:''}),h('h3',{},x.title),h('div',{class:'m'},x.author+' · '+x.views+' weergaven · '+x.likes+' likes'))))}
async function watch(id){const d=await api('/api/videos/'+id),v=d.video,b=$('#wb');b.replaceChildren();
const lk=h('button',{class:'btn g'},(d.liked?'Geliked':'Like')+' · '+v.likes),cl=h('div'),inp=h('input',{placeholder:'Schrijf een reactie',maxlength:'500','aria-label':'Reactie'}),er=h('p',{class:'err'});
lk.onclick=async()=>{if(!user)return auth('signup');try{const r=await api('/api/like/'+id,{method:'POST'});lk.textContent=(r.liked?'Geliked':'Like')+' · '+r.likes}catch(e){er.textContent=e.message}};
const add=c=>cl.append(h('div',{class:'cm'},h('b',{},c.name||'onbekend'),' '+c.text));d.comments.forEach(add);
const post=h('button',{class:'btn',onclick:async()=>{if(!user)return auth('signup');try{add(await api('/api/comment/'+id,{method:'POST',body:JSON.stringify({text:inp.value})}));inp.value='';er.textContent=''}catch(e){er.textContent=e.message}}},'Reageren');
b.append(h('video',{src:'/media/'+v.file,controls:'',autoplay:''}),h('h2',{},v.title),h('div',{class:'m'},v.author+' · '+v.views+' weergaven'),h('p',{},v.desc||''),lk,h('h3',{},v.comments+' reacties'),inp,er,post,cl);open('#watch')}
