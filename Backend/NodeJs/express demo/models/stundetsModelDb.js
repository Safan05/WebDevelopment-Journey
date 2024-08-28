//1) require mongoose
const mongoose=require("mongoose");

//3) create schema
const StdSchema=new mongoose.Schema({
        id:{
        type:Number,
        unique:true
        },
        name:String,
        Age:{
        type:Number,
        min:20
        },
        study:String
})

//4) create model
const Std=mongoose.model("Students",StdSchema);
module.exports=Std;