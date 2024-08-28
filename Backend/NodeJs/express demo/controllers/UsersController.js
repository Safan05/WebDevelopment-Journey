const User=require("../models/UsersModel");
const bcrypt=require("bcrypt");
const Register=async (req,res)=>{
    try{
    // check if exists
    let userC= await User.findOne({Email:req.body.Email}).exec();
    if(userC)
        return res.status(400).send("User already registered ...");
    // add to DB
    let salt=await bcrypt.genSalt(10);
    let hashedPass=await bcrypt.hash(req.body.Password,salt);
    let user= new User({
        Name:req.body.Name,
        Email:req.body.Email,
        Password:hashedPass,
        IsAdmin:false   //false by default as admin is not choosed when registration :)
    })
    console.log("Doing... #1");
    user.save().then(()=>{console.log("User Registered Succefully")
    const token=user.CreateToken();
        if(token==-1)
          return res.status(500).send("Token cannot be found ... Internal error")
        // it is better to save token in response header
        res.header("x-authentication-token",token);
    res.status(200).send({name:user.Name,email:user.Email});
    }
).catch((err)=>{
        for(let e in err.errors){
            console.log(err.errors[e].message);
            res.status(403).send("Bad request .... invalid input !");
        }
    })
    }
    catch(err){
        for(let e in err.errors){
            console.log(err.errors[e].message);
            res.status(403).send("Bad request .... invalid input !");
        }
    }
}
module.exports={
    Register
}