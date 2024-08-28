// for sign up and login
const express=require("express");
const router=express.Router();
const validator=require("../middlewares/UserValidator");
const Users=require("../models/UsersModel");
const controller=require("../controllers/UsersController");
//Registration
router.post("/",validator,controller.Register)

module.exports=router