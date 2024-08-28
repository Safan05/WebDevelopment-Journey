const student=require("../models/stundetsModelDb");
//Create
const CreateStd=(req,res)=>{
    let std=new student({
        id:req.body.id,
        Age:req.body.Age,
        name:req.body.name,
        study:req.body.study
    })
    std.save().then(()=>{
        res.status(200).send(std);
    }).catch((err)=>{
            // Check for duplicate key error
        if (err.code && err.code === 11000) {    // unique error is not in err.erros but in err.code as it comes from mongodb itself.
            console.log("#3 Duplicate Key Error");
            res.status(409).send("Conflict: Duplicate ID detected!");
        }   
        else     
        for(let e in err.errors){
            console.log("#3 Error");
            console.log(err.errors[e].message);
            res.status(403).send("Bad request .... invalid input !");
        }
    })
}

//Get by id
const getById=async (req,res)=>{
   try{ let std=await student.find({id:req.params.id});
    if(!std)
        return res.status(404).send("Student not found!");    
    res.send(std);
}
    catch(err){
        for(let e in err.errors){
            console.log(err.errors[e].message);
            res.status(403).send("Bad request .... invalid input !");
        }
    }
}

//Get All
const getAll=async (req,res)=>{
    try{
    let std=await student.find({}).select({name:1,id:1}).sort({id:-1});
    res.send(std);
    }
    catch(err){
        for(let e in err.errors){
            console.log(err.errors[e].message);
            res.status(403).send("Bad request .... invalid input !");
        }
    }
}

//Update
const UpdateStd=async (req,res)=>{
    try{
    let std=await student.findOneAndUpdate({id:req.params.id},req.body,{returnOriginal: false});
    if(!std)
        return res.status(404).send("Student not found!");    
    res.send(std);
}
catch(err){
    for(let e in err.errors){
        console.log(err.errors[e].message);
        res.status(403).send("Bad request .... invalid input !");
    }
}
}

//Delete
const DeleteStd=async (req,res)=>{
    try{
    let std=await student.findOneAndDelete({id:req.params.id});
    if(!std)
        return res.status(404).send("Student not found!");    
    res.send(std);
}
catch(err){
    for(let e in err.errors){
        console.log(err.errors[e].message);
        res.status(403).send("Bad request .... invalid input !");
    }
}
}
module.exports={
    CreateStd,getById,getAll,UpdateStd,DeleteStd
}