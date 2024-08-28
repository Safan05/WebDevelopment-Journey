const express=require("express");
const router=express.Router();
const path=require("path")
const controller=require("../controllers/StudentsControllerDB")
const stdValidator=require("../middlewares/StdValidator");
const Authorize=require("../middlewares/authorizationMiddleware")
//router.all("/",controller.StdReq)
/*app.get("/api/students",(req,res)=>{
    res.json(students);
})*/
router.get("/",controller.getAll)
router.get("/:id",controller.getById)
// POST handling
router.post("/",Authorize,stdValidator,controller.CreateStd)

//Delete handling
router.delete("/:id",Authorize,controller.DeleteStd)

//PUT handling
router.put("/:id",Authorize,controller.UpdateStd)
module.exports=router;