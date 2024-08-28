const Ajv=require("ajv");   //it returns a class 
ajv=new Ajv();
const std_Schema={
    type:"object",
    properties:{
        Age:{type:"integer",minimum:18,maximum:45},
        name:{type:"string"},
        id:{type:"integer"}
    },
    required:["Age","name"],
    maxProperties:4,
    minProperties:2
}
module.exports=ajv.compile(std_Schema);