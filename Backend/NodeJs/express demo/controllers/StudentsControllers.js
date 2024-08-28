const validator=require("../util/Students_Validator");
const Students=require("../models/studentsmodel");
const StdReq=(req,res,next)=>{
    console.log("A student request is recived");
    next();
}
const GetAllStd=(req,res)=>{
    Students.fetchAllStudents((obj)=>{
        res.render("demo.ejs",{std:obj});
    })
}
const GetById=(req,res)=>{
    let id=req.params.id;
    let std=Students.getById(id);
    res.json(std);
}
const AddStd=(req,res)=>{
    let valid=validator(req.body);
    if(valid){
    let std=new Students(req.body.name,req.body.age);
    std.saveStudent();
    res.json(req.body);
    }
    else
    res.status(403).send("invalid properties")
}
const DeleteStd=(req,res)=>{
    let idx=Students.fetchAllStudents().findIndex((val)=>{return val.id==req.params.id});
    if(idx!=-1){
    let deleted=Students.fetchAllStudents().splice(idx,1);  // implement function for it to be better
    res.send("Object Deleted Succefully");
    }
    else
    res.status(403).send("Cannot delete it");
}
const UpdateStd=(req,res)=>{
    let idx=Students.fetchAllStudents().findIndex((val)=>{return val.id==req.params.id});
    if(idx!=-1){
        for(i in req.body){
            Students.fetchAllStudents()[idx][i]=req.body[i];
        }
        res.json(Students.fetchAllStudents()[idx]);
    }
    else
    res.status(403).send("Cannot update it");
}
module.exports={StdReq,GetAllStd,GetById,AddStd,DeleteStd,UpdateStd};