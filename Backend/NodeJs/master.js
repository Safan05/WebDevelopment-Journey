// I suppose you are here to read more or to revise but u must be understanding the topic
var x=10;
var y=23;
function add(a,b){return a+b};
console.log(add(x,y));
console.log(global.x);
console.log(x);
/**
 * Hello To Node JS.
 * It is just a running environment for java script and it's non-blocking/asynchronus single threaded, which means it use just one thread
 * and the requests won't wait for each one to execute unlike js which is synchronus
 * --> see this video to know about how js is synchronus :  https://www.youtube.com/watch?v=uaphx2xjDKc
 * --> see this video for sync vs async : https://www.youtube.com/watch?v=cJIH3qPR_B8
 * 
 * --------------------------------------------------------------------------
 * 
 * in js if we have a variable x , included in more than a file , engine will deal with it on all files as one variable so we needed modules
 * so here in NodeJs each file is a module and variables aren't assigned to global
 * to assign variable z to global just type global.z=4;
 * there are objects which are global to the module or on file which are
 *  1-module
 *  2-exports
 *  3-require
 *  4-__dirname
 *  5-__filename
 * Module Wrapper Function :
 * Under the hood, NodeJS does not run our code directly,
 * it wraps the entire code inside a function before execution. 
 * This function is termed as Module Wrapper Function.
 * (function (exports, require, module, __filename, __dirname) {
        //module code
             });
 * --> https://www.geeksforgeeks.org/how-to-change-the-node-js-module-wrapper/
 *  
 * To make objects or functions global or linked to another module we use exports propery in module se ex1:
 */
//Ex1:
function sub(a,b){
    return a-b;
}
console.log(module);
module.exports={
    subtract:sub,
}
console.log(module)
/**
 * Their is a function called require("relative path"),
 * it gets objects that exist on module.exports of the target file
 * see Ex2 in app.js file; 
 */
/**
 * SetTimeOut,setInterval,etc....   exists globally without anything
 */
/**
 * Process object:
 *  it deals with alot of things we'll know later but examples from them are
 *  stdin,stdout,argv,etc...
 *  
 *  To know more :https://nodejs.org/api/process.html 
 * 
 *  argv it has all the input words on the console so:
 *  argv[0] is node
 *  argv[1] is master
 * each word u write will be saved.
 * see Ex3:
 */
//Ex3:
function greeting(name){
    console.log(`Hello ${name}`);
}
var x=process.argv;
greeting(x[2]);

// core modules:
// to use core modules like os we must require them first and it's better to require them in a const variables

/**
 * os module:
 *  it carries data about the operating system of the running device, like navigator object which carries data about browser on JS.
 *  os.hostname() -> name of device host.
 *  os.arch() -> architecture
 *  os.platform() 
 *  os.type()   -> OS type
 *  os.freemem() -> free memory
 *  os.totalmem() -> total memory
 *  More: https://nodejs.org/api/os.html
 */

/**
 * Path module:
 *  1-path.join(direcotry,filename) --> it returns another path of the given directory and wanted file name.
 *  2-path.dirname(path2) --> represent path .
 *  3-path.extname(path2) --> gets extention.
 *  4-path.parse(file) --> gets all data associated with path
 */ 
const p=require("path");
var p2=p.join(__dirname,"app.js");
console.log(p2);
console.log(p.dirname(p2));
console.log(p.parse(__filename))
/**
 * fileSystem module:
 *  Allows you to work with files on your system like read,write and delete.
 *  required as "fs" ie: require("fs")  
 *  
 *  Methods:
 *      readFile("filename","encoding",function(err,succ){});    //encoding usually becomes utf-8 or don't put anything and use tostring() that use utf-8 by default.
 *      // note: in call back functions the first param always used for error.
 *      readFileSync("filename","encoding");     
 *      see Ex4:
 *      writeFile("filename","text added",function(err){})  // it always ignore any data in the file and start from begining , 
 *      also if the file is not created it creates it.
 *      WriteFileSync("filename,"textadded);
 *      appendFile("filename","text added",function(err){}) // same as write but complete on the existing data.
 *      appendFileSync("filename","text added") 
 *      // note : we use the sync functions if we want a certain arrangment and wants to keep it , as async functions are not executed on arrangment.
 *      
 *      unlink("filename",function(err){})  // deleting the file.
 *      unlinkSync("filename")
 * 
 *      mkdir("dirname",function(err){})    // used for making directories "folders" , and also we can use the callback function to write files inside this dir 
 *      or just with arrangment in sync.
 *      mkdirSync("dirname")
 *      see Ex5:
 * 
 *      readdir("dirname",function(err,files){})    // reads the name of files and folders inside a directory , see Ex6:
 *      readdirSync("dirname")
 * 
 *      there is also 
 *      removedir("dirname",function(err){})
 */ 
// Ex4:
    const fs=require("fs");
    fs.readFile("Ex4.txt","utf-8",(err,info)=>{
        if(err)
            console.log("Failed")
        else
            console.log(info);
    })
//Ex5:
    fs.mkdir("New",(err)=>{
        if(err)
            console.error("Failed");
        else{
            process.chdir("./New");
            fs.writeFile("NewFile","Hello From Node!",(err2)=>{
                if(err2)
                    console.error("failed");
            })
        }
    })
//Ex6:
    fs.readdir("./New",(err,files)=>{
        if(err)
            console.log("Failed");
        else
            console.log(files)
    })
/**
 * Event Module:
 *  most of modules in nodejs are async response driven like the call back function inside the modules we've seen.
 * 
 * but custom event are got from events module which is required like other modules but it returns a class.
 *  to make an events create instance from the returned class.
 * 
 *  methods:
 *      eventobj.on("event name",()=>{handler func})    create handler based on the event name
 *      eventobj.once("event name",()=>{handler func})  //  //  //  //  // //  //  //   //  // but run just the first time the event fired.
 *      // handlers runs synchronous.
 * 
 *      eventobj.emit("event name")     // the event is fired when called.
 *      eventobj.off("event name" , function)   // to stop or prevent handler from exectution, but note we must keep the function in a var so it won't be anonymous
 *      see ex7:
 */
//Ex 7:
const Event=require("events");
var eventobj=new Event();
eventobj.on("Seen",()=>{
    console.log("seen 1");
})
var h2=()=>{
    console.log("seen 2");
};
eventobj.on("Seen",h2)
eventobj.once("Seen",()=>{
    console.log("seen 3");
})
console.log("----------------------")
eventobj.emit("Seen");
console.log("----------------------")
eventobj.emit("Seen");
eventobj.off("Seen",h2);
console.log("----------------------")
eventobj.emit("Seen");
console.log("----------------------")

/**
 * HTTP module:
 * To make HTTP requests in Node.js, there is a built-in module HTTP in Node.js to transfer data over the HTTP. 
 * To use the HTTP server in the node, we need to require the HTTP module. 
 * The HTTP module creates an HTTP server that listens to server ports and gives a response back to the client.
 *  
 *  methods:
 *  1-.createServer()   // used to create servers with a given port and return it
 * it is required like any other required module.
 *  server methods:
 *  1-.listen(port,function())     // note ports from 0 to 1023 are already preserved so don't use them.
 *  2-.on("request",(req,res)=>{ function })   // handling a server request , req is for request and res if for response 
 *  note: handling server request can be a call back function inside .createserver() like Ex9:
 *  An HTTP request is made from a client to a host located on the server in order to receive a resource needed to build the content.
 *  req object have some properties:    
 *      1-req.method    // get or post
 *      2-req.url       // url of request
 *  res object have some properties and methods too:
 *      1-res.write(" ")        // write response to the client side
 *      2-res.end()     // ending your resopnese
 */
    const http=require("http");
// Ex8: uncomment it to run it.
/*    const server_ex8=http.createServer();
    server_ex8.listen(3000,()=>{ console.log("running Server from Ex8.....!!!");});
    server_ex8.on("request",(req,res)=>{
        console.log(req.url);
        console.log(req.method);
        console.log("request recived");
        res.write("Hello from my first server !")
        res.end();
    });*/
// Ex9: uncomment it to run it.
  /*     const server_ex9=http.createServer((req,res)=>{
        console.log(req.url);
        console.log(req.method);
        console.log("request recived");
       // console.log("Nodemon test");      // uncomment it to test nodemon tool.
        res.write("Safan greets you from his first server :)")
        res.end();
    });
    server_ex9.listen(3000,()=>{ console.log("running Server from Ex9.....!!!");});

    console.log("Waiting .... !")*/
    /**
     * We use nodemon for servers as it will detect the change in ur code automatically and update ur server without exiting by ^c then running again. 
     */
    // npm install -g nodemon
    /**
     * Url can be different for the same server , so we need handle this requests according to the url
     * also we can make the response write html file so the response from the server is ourpage see example 10
     */
        /**
     * Note: if html file is requesting files like css file , and it is not requested from node here 
     * it's status will become pending and won't response.
     */
    /**
     * HTTP header:
     *  HTTP headers are the hidden communicator of the HTTP protocol, providing critical metadata for both requests and responses. 
     *  They help define the security of the interaction, how to interpret the content, define capabilities of the actors, 
     *  controlling caching, etc.
     * 
     *  more in : https://beeceptor.com/docs/concepts/http-headers/
     * 
     *  to see http header of any site : https://websniffer.com/
     * 
     *  http header are created implicitly.
     *  http contains the status code too which we explained in js file 
     *  we can use some methods and properties to set it on our own.
     * 
     *      1- res.statusCode   
     *      2- res.writeHead("status code",{headers});
     *      3- res.setHeader("{header as key value pairs}");
     *       
     * 
     *  Responding with json object:
     *      just put it in the res.write()
     *  
     * // see Home.html to see xhr request
     */
    const Ex10_JSON=[
        {
            "name":"Abdallah",
            "Age":"20",
            "Study":"Computer Engineering",
            "hobby":"Physics"
        },
        {
            "name":"Safan",
            "Age":"19",
            "Study":"Computer Engineering",
            "hobby":"Math"
        }
        ,
        {
            "name":"Abdallah's Love",
            "Age":"20",
            "Study":"Guess",
            "hobby":"Guess"
        }
    ]
    // Ex10: uncomment it to run it.
    const server_ex10=http.createServer((req,res)=>{
        if(req.url=='/'){
            res.write("Safan greets you from his first server :)")
            res.end();
        }
        else if(req.url=="/home"){
            fs.readFile("./home/home.html",(err,data)=>{
                if(err)
                    console.error("File Not Found !");
                else
                {
                    res.write(data.toString());
                    res.end();
                }
            })
        }
        else if(req.url=="/style.css"){     // handling css file
            fs.readFile("./home/style.css",(err,data)=>{
                if(err)
                    console.error("File Not Found !");
                else
                {
                    res.write(data.toString());
                    res.end();
                }
            })
        }
        else if(req.url=="/students"){
            res.write(JSON.stringify(Ex10_JSON));
            res.end();
        }
        else{
            res.statusCode=404;
            res.end();
            // I made status code 404 for url's I've not handled as it is unfound ,
            // so it won't be pending making the page loading all time like the css file before handling.
        }
    });
    server_ex10.listen(3000,()=>{ console.log("running Server from Ex10.....!!!");});

    console.log("Waiting .... !")
/**
 * NPM:
 *  it is a command line to deal with packages, packages are multible useful js files
 *  to run it in a folder we first type npm init in cmd
 *  it generates json for the created package , if we runned node . it will run the entrypoint of this package
 * 
 *  for license:https://spdx.org/licenses/
 */

/**More for NPM , application in NPM folder */

/**Express is in express demo folder */