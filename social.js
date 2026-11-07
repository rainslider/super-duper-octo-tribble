const {fs,path,VID,MAX,db,save,hash,id,send,me,body,login,pv}=require('./ctx');
module.exports=async(req,res,u)=>{const P=u.pathname;let m;
if(req.method==='POST'&&(m=/^\/api\/like\/(\w+)$/.exec(P))){const usr=me(req);if(!usr)return send(res,401,{error:'Log in om te liken.'});
const i=db.likes.findIndex(l=>l.v===m[1]&&l.u===usr.id);i<0?db.likes.push({v:m[1],u:usr.id}):db.likes.splice(i,1);save();return send(res,200,{liked:i<0,likes:db.likes.filter(l=>l.v===m[1]).length})}
if(req.method==='POST'&&(m=/^\/api\/comment\/(\w+)$/.exec(P))){const usr=me(req);if(!usr)return send(res,401,{error:'Log in om te reageren.'});
const b=await body(req),text=String(b.text||'').trim().slice(0,500);if(!text)return send(res,400,{error:'Typ eerst een reactie.'});db.comments.push({v:m[1],u:usr.id,text});save();return send(res,200,{name:usr.name,text})}
};
