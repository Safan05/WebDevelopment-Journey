// like any used module we require it first
const express=require("express");
// if u look at express file , it returns a function create app and this function returns app function object so we store it in var app.
const app=express();
const path=require("path")
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use((req,res,next)=>{
  //  console.log("logging");
    next();
})
app.use(express.static("public"));
const cookieParser = require('cookie-parser')    // cookie-parser to use cookies like we did for json.
const helmet=require('helmet');
app.use(cookieParser());
app.use(helmet());
const ejs=require("ejs");
app.set("template engine","ejs");
const Ajv=require("ajv");   //it returns a class 
ajv=new Ajv();
const { type } = require("os");
const { kMaxLength } = require("buffer");
app.get("/",(req,res,next)=>{
    console.log("Stage1");
    next();
},(req,res)=>{
    console.log("request recived !");
    res.sendFile(path.join(__dirname,"home.html"))
})
// see this link for express documentation , function , etc... : https://expressjs.com/en/4x/api.htm

// there is port for the working environment so listening to port 3000 or any other number isn't the best solution
// on production of the website so we make it equal to the environment set port otherwise let it 3000
// do u remember process module? see line 55 in master.js
// it saves the set port of the environment as I will retrive it below:


// for reading a variable form url we write /:id    here id will be a var stored in request.params.id.
const students=[
    {
        name:'Abdallah',
        Age:20,
        id:3,
        Study:'Computer Engineering',
        hobby:'Physics'
    },
    {
        name:'Safan',
        Age:19,
        id:1,
        Study:'Computer Engineering',
        hobby:'Math'
    }
    ,
    {
        name:`Abdallah's Love`,
        Age:20,
        id:2,
        Study:'Guess',
        hobby:'Guess'
    },
];
app.all("/api/students",(req,res,next)=>{
    console.log("A student request is recived");
    next();
})
/*app.get("/api/students",(req,res)=>{
    res.json(students);
})*/
app.get("/api/students",(req,res)=>{
    res.render("demo.ejs",{std:students});
})
app.get("/api/students/:id",(req,res)=>{
    let id=req.params.id;
    let std=students.find((val,idx,arr)=>{return val.id==id})
    res.json(std);
})
app.get("/welcome.html",(req,res)=>{
    console.log(req.query);
    console.log(req.query.fnm);
    console.log(req.query.lnm);
    res.sendFile(path.join(__dirname,"welcome.html"))
})
// here in the url due to that post is more secure than get , the queries are not in the url but in req.body
//  so we need to parse the body using middleware so we use app.use(express.middlewareName()) // see line 6.
// there is also parser for json objects stored in body , see line 7.
app.post("/welcome.html",(req,res)=>{
    console.log(req.body);
    let da=new Date();
    da.setFullYear(da.getFullYear()+2);
    console.log(da);
    res.cookie("usrname",Buffer.from(req.body.fnm,{expires:da}).toString('base64'));    // we use base64 encoding but it 
                                                                                        //is still not secure as it can be decoded
    res.cookie("Age",25,{httpOnly:true});   // we use http only so cookies do not appear on the console for more security
    res.send(`Hello ${req.body.fnm} ${req.body.lnm} to our website`);
})
/**Get Vs Post from ChatGpt 
 * See get_VS_post.js file
*/



// we won't create specific ui for testing each route handler we will use test tools like
// 1-PowerShell   -- cmd tool
// 2-Postwoman    -- online tool
// 3-postman      -- third party tool
const std_Schema={
    type:"object",
    properties:{
        Age:{type:"integer",minimum:18,maximum:45},
        name:{type:"string"}
    },
    required:["Age","name"],
    maxProperties:4,
    minProperties:2
}
let validateStd=ajv.compile(std_Schema);
// POST handling
app.post("/api/students",(req,res)=>{
    let valid=validateStd(req.body);
    if(valid){
    req.body.id=students.length+1;
    students.push(req.body);
    res.json(req.body);
    }
    else
    res.status(403).send("invalid properties")
})

//Delete handling
app.delete("/api/students/:id",(req,res)=>{
    let idx=students.findIndex((val)=>{return val.id==req.params.id});
    if(idx!=-1){
    let deleted=students.splice(idx,1);
    res.send("Object Deleted Succefully");
    }
    else
    res.status(403).send("Cannot delete it");
})

//PUT handling
app.put("/api/students/:id",(req,res)=>{
    let idx=students.findIndex((val)=>{return val.id==req.params.id});
    if(idx!=-1){
        for(i in req.body){
            students[idx][i]=req.body[i];
        }
        res.json(students[idx]);
    }
    else
    res.status(403).send("Cannot update it");
})
app.get("/cookie",(req,res)=>{
    console.log(Buffer.from(req.cookies.usrname,'base64').toString());
    console.log(req.cookies.Age);
    res.sendStatus(200);
})
// I am gonna test this using postman , see a tutorial for it , it's too easy.

//now we'll install "ajv" from npm for validation on the input ex:
//validate that input is characters or within specific length , etc...
//to validate we need a schema json to compare"Validate" with it
// the the post function , you'll see what I've said.


//Middlewares: it is a function that take request and have access to response , another function 
// from req to res there is a middlewares pipline
// it processes the request and send it to the response if it is the last middleware other wise it send it to the next middleware.

/**
 * Middleware types
 * 1-Built-in middlewares
 *      -express.json()     // we used in line 7
 *      -express.urlenconded()  // we used in line 6
 *      -express.static("folder name")   // used to parse static files like html,css,img,etc.. see line 8 so now we can request any file inside public folder.
 * 2-Route-Handler      // each get,post,etc... are considered Route-handler    
 *      // we can add next function and call it , they we'll be used a pipline.
 *      // app.all is a middleware for any http verb we can use the above.
 *      // if end point is "*" so it is for all endpoints
 * 3-Custom/Application level
 *      // we use it to apply cross cutting-concerns like : logging, authentication and authorization.
 *      // app.use((req,res,next)=>{
 *          //  your bussiness
 *          next();
 *      })
 *      // note: arrangment matters , according to which app.use() is called first
 * 4-Third-Party
 *      // before implementing custom one , look if the middleware u want already exists , u can search for it on express resources
 *      // this link --> https://expressjs.com/en/resources/middleware.html
 *      // ex of the most used ones:
 *          1- helmet: add http headers to make the application more secure.
 *          2- cookie-parser: to parse the cookies in req when we use it anywhere inside the server.
 * 5-Error-handling
 * 6-Parameters
 *      // used to handle parameters in the url before handling it inside the route handler it self , see a tutorial for it. 
 */ 

// Template engines , they are used so we can embbed js in html or they are used to put our response in html files but with extnesion
// according to used template engine, I'll put example for students get api and if u want to run it just uncomment on of the commented one.
const port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`listening to port ${port} ..... !`);}); 


