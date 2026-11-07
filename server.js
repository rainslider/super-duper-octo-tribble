const http=require('http'),url=require('url');
const {PORT,send}=require('./server/ctx');
const routes=['auth','videos','upload','social','media','static'].map(n=>require('./server/'+n));
http.createServer(async(req,res)=>{const u=url.parse(req.url,true);try{for(const r of routes)if(await r(req,res,u))return}catch(e){console.error(e);if(!res.headersSent)send(res,500,{error:'Serverfout.'})}}).listen(PORT,()=>console.log('SocialRain draait op poort '+PORT));
