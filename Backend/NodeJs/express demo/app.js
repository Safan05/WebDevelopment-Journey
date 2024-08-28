// like any used module we require it first
process.on("uncaughtException",(exception)=>{console.log("Exception !")});  // used to handle any sync exception that may happen
process.on("unhandledRejection",(exception)=>{console.log("Rejection !")});  // used to handle any asyn rejection that may happen
const express=require("express");
// if u look at express file , it returns a function create app and this function returns app function object so we store it in var app.
const app=express();
const path=require("path")
const mongoose=require("mongoose");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
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
const Students=require("./routes/students.js"); // routing structure 
const logging=require("./middlewares/logging.js");  // custom middlewares structure, won't be applied on public as it comes before the middleware.
app.use(logging);
mongoose.connect("mongodb://localhost:27017/Training").then(()=>console.log("Database connected...")).catch((err)=>console.log(err));
const userRouter=require("./routes/user.js");
const authRouter=require("./routes/auth.js");
const admin=require("./routes/admin.js");
app.use("/api/login",authRouter);
app.use("/api/users",userRouter);
app.use("/api/students",Students);
app.use("/api/admin",admin);
//throw Error("unhandled excption");
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
 *      // used as the last middleware in the pipeline and it is used to handle catch statements
 * 6-Parameters
 *      // used to handle parameters in the url before handling it inside the route handler it self , see a tutorial for it. 
 */ 

// Template engines , they are used so we can embbed js in html or they are used to put our response in html files but with extnesion
// according to used template engine, I'll put example for students get api and if u want to run it just uncomment on of the commented one.
// for app.set()-->https://expressjs.com/en/api.html#app.set


// now I'm going to make each api in a module so our project is well structured.

// routes folder is used to make a file for each api "routes" to handle it then require each one here
// middlewares folder is used to make a file for each custom middleware to require it here before u want to use it.
// util folder is used to make a file for each used function like validator.
// data folder is used to contain the data for the project like: students.json or if there exists a database.
// models folder is used to keep function like getters,setters for the data.
// public folder contains the static files used for the front-end like html
// views folder contains the files that is interactive with js like sending the data to html file in ejs extenstion.
// I will complete the mongodb , or link with it in another folder called mongodb in the nodejs folder.

// now after the mongodb demo I'll create a new model to deal with students as a database not json.


// If the operation is not CRUD operation it is preferrable to do it with post for more security.

// to keep our data secret from code , which is important to security we save our data
// in config folder as json files and use config package to get the key from the running environment "Server" not from the code itself

// authorization is to make some users access some endpoints that are not accessed by others
// I'll use it here to make admin users access all CRUD operations on students while any other users access only read.

// process.exit(0)  succefull exit
// procces.exit(1)  error exist and the process manager on the host will restart it
const port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`listening to port ${port} ..... !`);}); 


