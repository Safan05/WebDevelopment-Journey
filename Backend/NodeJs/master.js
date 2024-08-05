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