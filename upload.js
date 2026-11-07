$('#up').onclick=()=>user?open('#upl'):auth('signup');
$('#go').onclick=async()=>{const f=$('#uf').files[0],e=$('#ue');e.textContent='';if(!f)return e.textContent='Kies eerst een video.';
$('#go').disabled=true;$('#go').textContent='Bezig met uploaden…';
try{await api('/api/upload?title='+encodeURIComponent($('#ut').value)+'&desc='+encodeURIComponent($('#ud').value),{method:'PUT',headers:{'Content-Type':f.type},body:f});shut();$('#ut').value=$('#ud').value=$('#uf').value='';list()}catch(x){e.textContent=x.message}$('#go').disabled=false;$('#go').textContent='Uploaden'};
