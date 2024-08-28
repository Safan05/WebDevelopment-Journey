const user = require("../models/UsersModel");
const bcrypt = require("bcrypt");
const Login=async (req,res)=>{
    try{
    // check Email
    let User=await user.findOne({Email:req.body.Email}).exec();
    if(!User)
        return res.status(400).send("Invalid Email ....");
    // check Password
    const ValidPswrd= await bcrypt.compare(req.body.Password,User.Password);
    if(!ValidPswrd)
        return res.status(400).send("Wrong Password ....");
    // response after authnetication
   // console.log(User);
    const token=User.CreateToken();
        if(token==-1)
          return res.status(500).send("Token cannot be found ... Internal error")
        // it is better to save token in response header
        res.header("x-authentication-token",token);
        res.status(200).send("Successful Login...");
}
        catch(err){
            for(let e in err.errors){
                console.log(err.errors[e].message);
                res.status(403).send("Bad request .... invalid input !");
            }
        }
}
module.exports={Login}