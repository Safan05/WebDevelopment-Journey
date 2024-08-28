const Ajv=require("ajv");
ajv=new Ajv();
const schema={
    type:"object",
    properties:{
        Email:{type:"string",
              pattern: "^\\S+@\\S+\\.\\S+$",
            //  format: "email"
            },
        Password:{type:"string",minLength:5}
    },
    required:["Email","Password"]
}
module.exports=ajv.compile(schema);