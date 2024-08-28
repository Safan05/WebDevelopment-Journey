const jwt = require("jsonwebtoken");
const config=require("config");
module.exports=(req,res,nxt)=>{
    const token=req.header("x-authentication-token");
    if(!token) return res.status(401).send("Access denied....!");
    try{
    const payload=jwt.verify(token,config.get("jwtsec"));
    console.log(payload.IsAdmin);
    if(!payload.IsAdmin)
        return res.status(401).send("Access denied....!");
    nxt();
}
   catch(err){
    res.status(400).send("Invalid Token")
   } 
}