// like any used module we require it first
const express=require("express");
// if u look at express file , it returns a function create app and this function returns app function object so we store it in var app.
const app=express();
app.get("/",(req,res)=>{
    console.log("request recived !");
    res.send("Hello from my first Express server !");
})
// see this link for express documentation , function , etc... : https://expressjs.com/en/4x/api.htm

// there is port for the working environment so listening to port 3000 or any other number isn't the best solution
// on production of the website so we make it equal to the environment set port otherwise let it 3000
// do u remember process module? see line 55 in master.js
// it saves the set port of the environment as I will retrive it below:
const port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`listening to port ${port} ..... !`);});