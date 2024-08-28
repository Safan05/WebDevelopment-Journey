// only with admins , used so the set admin can set other admins
const express=require("express");
const router=express.Router();
const authorize=require("../middlewares/authorizationMiddleware");
const user=require("../models/UsersModel");
router.put("/:id",authorize,(req,res)=>{
    user.findByIdAndUpdate({_id:req.params.id},{IsAdmin:true},function(err,data){
        if(!err){
            if(data)
                res.status(200).send("this user is now Admin");
            else
                res.status(404).send("user not found !");
        }
        else{
            res.status(500).send("Internal Server Error ...");
        }
    });

})

module.exports=router;
