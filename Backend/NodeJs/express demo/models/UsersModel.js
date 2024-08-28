const mongoose=require("mongoose");
const valid=require("validator");
const jwt = require("jsonwebtoken");
const config=require("config");
// create schema
const schema=new mongoose.Schema({
    Email:{
        type:String,
        unique: true,
        required: true,
        validate:{
            validator: (val)=>{ return valid.isEmail(val);},
            message:'{VALUE} is not valid'
        }
    },
    Name:{
        type:String,
        required: true
    },
    Password:{
        type:String,
        required: true,
        minlength:5
    },
    IsAdmin:{type:Boolean}
})

// create model
schema.method("CreateToken",function(){
    console.log("#2 from inside func")
    if(!config.get("jwtsec"))
        return -1;
    const token=jwt.sign({userid:this._id,IsAdmin:this.IsAdmin},
        config.get("jwtsec"));
    return token;
})
const user=mongoose.model("Users",schema);
module.exports=user