const {fs,path,PUB}=require('./ctx');
const MIME={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png'};
module.exports=(req,res,u)=>{const P=u.pathname;
let f=path.normalize(path.join(PUB,P==='/'?'index.html':P));if(!f.startsWith(PUB)||!fs.existsSync(f)||fs.statSync(f).isDirectory())f=path.join(PUB,'index.html');
res.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(res);return true
};
