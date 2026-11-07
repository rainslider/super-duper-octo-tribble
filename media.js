const {fs,path,VID}=require('./ctx');
function media(req,res,f){const p=path.join(VID,path.basename(f));if(!fs.existsSync(p)){res.writeHead(404);return res.end()}
const st=fs.statSync(p),type=p.endsWith('.webm')?'video/webm':'video/mp4',m=/bytes=(\d*)-(\d*)/.exec(req.headers.range||'');
if(m){const a=+m[1]||0,b=m[2]?+m[2]:st.size-1;res.writeHead(206,{'Content-Range':`bytes ${a}-${b}/${st.size}`,'Accept-Ranges':'bytes','Content-Length':b-a+1,'Content-Type':type});fs.createReadStream(p,{start:a,end:b}).pipe(res)}
else{res.writeHead(200,{'Content-Length':st.size,'Content-Type':type,'Accept-Ranges':'bytes'});fs.createReadStream(p).pipe(res)}}
module.exports=(req,res,u)=>{const m=/^\/media\/([\w.]+)$/.exec(u.pathname);if(!m)return false;media(req,res,m[1]);return true};
