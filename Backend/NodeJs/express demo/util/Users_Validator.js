const Ajv=require("ajv");
ajv=new Ajv();
const schema={
    type:"object",
    properties:{
        Name:{type:"string",pattern:"^[A-Z][a-z]*$"},
        Email:{type:"string",
              pattern: "^\\S+@\\S+\\.\\S+$",
            //  format: "email"
            },
        Password:{type:"string",minLength:5}
    },
    required:["Name","Email","Password"]
}
module.exports=ajv.compile(schema);