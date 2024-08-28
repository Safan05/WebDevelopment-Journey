const express = require("express");
const router = express.Router();
const validator= require("../middlewares/AuthMiddleWareValid");
const controller=require("../controllers/AuthController");
router.post("/",validator,controller.Login)

module.exports=router;