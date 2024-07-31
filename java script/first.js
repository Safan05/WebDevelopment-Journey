document.write("Hello World <br> Hii <br>");
/* 1-we write inside document.write(" ")
2- each line ends with ; as c++
3- it's spaces and breaks are written with html tags like above
*/
/*
Dialogue boxes:

1-alert("write alert") this gets you an alert from the top of the browser
    ex:onclick="alert('write alert to get')" and this written to alert when somethings is clicked
2-prompt("write message") this takes input from the user and pops from the top of the browser , this input can be stored in var.
// note it returns string
3-confirm("ask user") and it offers two options "yes or no"

There is an example on this on index.html
*/
console.log("display in console");
console.error("error");
console.warn("warning");
console.log("%c Nice to meet you"," color:red;");
/*
    console.log() is used to display just in console
    console is founded at developer tools "inspect" in browsers
    console.error() just as .log but it appears as error
    %c before text the , " write css styling and this applies to just console "

    here more console functions to use
    https://developer.mozilla.org/en-US/docs/Web/API/console
    */
    console.log(x);
    console.log( typeof x);
   var x=15;
   console.log(x);
   console.log( typeof x);
   var x="Hii"
   console.log(x);
   console.log( typeof x);
    x=true;
    console.log( typeof x);
    x=null;
    console.log(typeof x);
/*
it has variables and it's types are:
    1-var x=10; "number"
    2-var x="Hello"; "string"
    3-var x=true; "boolean"
    4-var x=null; "null"
    5-var x; "undefined"
    6- object as js is oop language
typeof x : returns x type
*/
/*
operators are typically as c++
in and && if 
8&&9&&7
it will output 7 as all of them are true so the last one "7" is out
but in
8||9||7
if a true is found it will return the first one which is 8 here

+ can be used to concatenate strings

also ternary operator is as c++


-> There is auto coersion which casts data types ex:
if x="5"
and y=5
then x==y
is true as it casts y as number 
and 3<2<1
while get true 3<2 is false which is casted to 0 so 0<1 is true

to prevent this we use strict equality: ===
and in inequality we use brackets.
*/
var f="Abdallah",l=" Ahmed",name=f+l;
console.log(name);
/* if statements and switch cases are very like c++ 
the only difference is in else if which is just the if inside else like
if(condition){


}
else
    if(condition){
}

else{
}
 and the switch is:
    switch(expression){
    case 1:
        //;
    break;

    case3:
        //;
        //;
    break;
    }
also if case 1 and 2 will get the same action it is written like:
switch(){
case1:
case2:
    //; 
    //;
break

case 3
    //;
    //;
break
}
and there is example on them in index.html file
*/
/*
loop statments
1-for statment : same as c++
for(intial statment;condition;increment){
code
}
2- while : same as c++
while(condition){
code;
}
3- do while:same as c++
do{

}while(condition)

4-for in: used for associative array , like itirators in c++
for(i in array){ // used to loop over array
// code;
}
*/
/*
built-in functions:
1-ParseInt()
2-ParseFloat()
3-isFinite()
4-isNan()
5-decodeURL()
6-encodeURL()

returns most integers from start of begin
if x="101abc"
so parseint(x)=101
but if x="abc101"
paseint(x)=none
and same for float

also ParseInt is used for base convertion like : ParseInt(string,"base")
ParseInt("0110","2") here 2 means from binary to decimal and this results an 6

isFinite("string" or number)
if this string as all number or just a number is called
it will return true otherwise false.
*/
/*
User defined functions shape
function add(x,y){
var sum=x+y;
return sum;
}

in js functions can be called without passing parameters and it return nan in this case but we can define the values
to prevent nan and this is used by turnary operator :
User defined functions shape
function add(x,y){
x=(x==undefined)?0:x;
y=(y==undefined)?0:y;
var sum=x+y;
return sum;
// it can also be like c++
function add(x=0,y=0){
var sum=x+y;
return sum;
}
}
*/
function add(x,y){
    x=(x==undefined)?1:x;
    y=(y==undefined)?1:y;
    var sum=x+y;
    return sum;
    }
    function add2(x=2,y=2){
        var sum=x+y;
        return sum;
        }
    // try to call this in console
    // scopes are like c++ : global scobe & local scobe
    // debuging is on source in developer tools
/*
Built in objects
first we can create objects using new & delete them using delete but here doesn't affect memory like c++ but just add or remove properties of object
so if string is called like
var newstr= new string("abdallah")
here newstr type is object and not a string
now we will discuss each builtin-object
1- string:
        Properties: length
        functions:
        1- string.length //it returns the length of the string. 
        2- charat(index) // returns character at index.
        3- indexof("") // return the first index of string or character inside my string.
        4- lastindexof("") //  return the last index at which the string or character appears in my string.
        5- substr(index 1,index 2) // return the substring starting at index 1 , including 1 and ends at index 2 ,exluding 2.
        6- split("") // return array containing spliting result of all substrings at string"".
         if the string is "" it means split at each character , " " split at empty space .
        7-replace("s1","s2") // it replaces first found s1 with s2.
        8-s.trim() // removes whitespace from beginning and ending

        regular expression is used in replace : it's shape is
        /pattern/flag (i or g "global" or m)
        ex:
        /Moi/i
2- array objects:
Abstract definiton
var array= [ob1,ob2,ob3,..., ];
or Constructor:
var array=new array();
array[0]=ob1;
array[1]=ob2;
        properties: length
        functions:
        1- .length //it returns the length of the string. 
        2- .join("s") // join the array elements in a string and can put "s" between each element if given.
        3- .pop()
        4- .push()
        5- .shift() pop but from begining/
        6- .unshift() push // // //
        7- .reverse() reversed.
        8- .sort() -> uses unicode not numerical
         so for sorting numerical function we use
         sort(var (a,b){return a-b});
         as if a>b it will be + so it sort ascendingly

3- associative array : it's the same idea of map in c++
        var AssociativeArray = new array();

        To put a key , it must be inside a string or another val
        AssociativeArray["s1"]=15;
        or
        var x="12"
        AssociativeArray[x]=15;

        -We can't use array methods on it , so to loop we use for(in) loop
         for(i in AssociativeArray) {
         
         }
4- Date object: 
        it's an object for date , it's constructor saves the current time for default, it has setters and getters to control it
            var now=date();
            // this contains the data of this second

            getters:
            getDate() returns day number in the month
            getMonth() returns month number in the year , starting from 0
            getYear() returns year number starting from 1900 , so for ex: 2024 is 124.
            getFullYear() returns the actual number of year.
            
            setters are the same but to set not to get , there are methods for minutes and hours too , you can find and know them easily

            important date methods:
            toDatestring(); returns the date in this format
             Day-name Month-name Day-num Year-num
            toLocalString(); returns the date in this format
            00/00/0000 00:00:00 am
5- Error object: examples in index.
        errors have many types as known , errors can be from the environment like syntax error or can be thrown by the developer
        in case of logical errors
        // search for js errors
        methods:
        e.name-> returns name of the error.
        e.message-> returns message of the error. 
        to do we create an error object , and use throw but no more code is executed in the file after throwing.
        as Ex:1 below , note: comment Ex:2 to use it 
        */
/*
Instance of method:
wriiten as 
instanceof type
it gives true or false if the object created by constructor is instance of the type

if(e instaceof RangeError){
// do code
}
Error Handling:
        1- try catch
        try{
            // code that throw happens within
        }
        catch{
            // code to be executed when thrown instead of stopping 
        }
            // the rest is executed normally , see ex:2 
        finally {
            used for rest of the code in case catch itself had a error like typeerror
            but if error exists in catch no code runs outside finally
        }
        2- onerror event: it is written globally for the environment and it will handle any throw automatically.
            onerror=errorHandle();
            errorHandle(msg,url,l,col,err)
            {
                //
                //
                //
                return true -> if u don't want error to appear on console and false for vice.
            }

*/
var x=String("Abdallah Ahmed");
console.log(x.length);

var map=new Array();
var x=prompt("enter first value")
map[x]=1;
map["Ce_Moi"]=" Abdallah";
map["13"] = 13;
var y=confirm("do you want to print")
if(y)
for(i in map){
    console.log(i+" : "+map[i]);
}
// Ex:1
//var x=parseInt(prompt("enter value between 10,30","20"));
//if(x>30||x<10)
//    throw RangeError("Out of range");
//console.log("Hello!!")

// Ex:2
try{
var x=parseInt(prompt("enter value between 10,30","20"));
if(x>30||x<10)
    throw RangeError("Out of range");
console.log("Hello from try block!!")
}
catch(err){
    console.log("Hello from catch block!!")
}
console.log("Hello from normal code!!")
/*
Functions:
note-> function can be assigned to var and similarly inside an array as and it will be called anonymous function.
var x=function (var a,var b){
return a+b;
}
and if you put a name for the function it will be unseen except inside the function, i.e: recursive calls
-> also it can't be hoisted as can't be called above it's implementation like statmment funciton
*/
//--------------------------------------------------------------------------------------------------------
/*
object object: it is a custom object creation , object that has methods and properties you define.
There are two ways to create it:
1- using constructor or literal definition: 
    -------------------------------------------------------
    Defining:
    var myobj=new object() // constructor
    var myobj = {}; // literal creation
    -------------------------------------------------------
    Properties: can be defined using dot notation or subscribt method --> like associative array .
    myobj.name="Abdallah"
    myobj.Age="20"

    using subscript
    myobj["name"]="Abdallah";
    myobj["Age"]=20;
    -------------------------------------------------------
    methods:
    myobj.getname()=function{
        return myobj.name;
    }
    -------------------------------------------------------
2- literal creation:
var myobj={
    name:"Abdallah",
    Age:20,
    GetAge: function(){
        return this.Age;
    },
    GetName: function(){
        return this.name;
    },

methods for object object
    1- hasOwnProperty("s1");
        checks weather the object has property name s1 or not.
    2- tostring();
        it return string of the object , it is object Object.
    // there is photo having the rest outside.
    but note we can deal with it as associative array where property keys is like the key and values is the value
    so we can use for in loop with it.
};
*/
var myobj={
    name:"Abdallah",
    Age:20,
    GetAge: function(){
        return this.Age;
    },
    GetName: function(){
        return this.name;
    },
};
console.log(myobj.GetName());
/*
If we want to create alot of objects with the same prop and methods , ex: object for each student
to create this we won't define the properties an methods each time but we'll use one of two way:
1- Factory method: 
    creating a function that returns object with desired properties and methods.

    function student(name,id,sec){
        return{
            StudentName: name,
            StudentId:id , 
            StudentSection:sec,
            StudentInfo: function(){
                console.log("The student name is "+ this.StudentName +" His Id is "+this.StudentId)
            },
        }
    } 
2- Constructor method:
    creating a constructor to the object
    function Student(name,id,sec){
        this.StdName=name;
        this.StdId=id;
        this.StdSec=sec;
    }
    when creating object we do the following:
    var me= new Student("Safan","150","2");

    You can also make this functions and store them in a variable
*/
function student(name,id,sec){
    return{
        StudentName: name,
        StudentId:id , 
        StudentSection:sec,
        StudentInfo: function(){
            console.log("The student name is "+ this.StudentName +" His Id is "+this.StudentId +" and he is in section number" +this.StudentSection)
        },
    }
} 
var Moi=student("Abdallah",123,1);
Moi.StudentInfo();
function Student(name,id,sec){
    this.StdName=name;
    this.StdId=id;
    this.StdSec=sec;
}
var me= new Student("Safan","150","2");
console.log(me);
for(i in me){
    console.log(i+": "+me[i]);
}
/*
defineproperty method:

used to define a property for an object, but not like regular defintion here we can add 2 types of descriptors

    Object.defineproperty(obj,"property name",{
    descriptors 
    })
    or 
    Object.defineproperties(obj,{
        property1:{
        descriptors
        },
        property2:{
        
        },
    })
1-data descriptors
    value:undefined 
    writable:false      //means you cannot edit this value
    configurable:false  //means you cannot delete the property
    enumerable:false // means you cannot do a for in loop to get it
2-accessor descriptor:
    get:undefined
    set:undefined

    they can be a function to set or get like
    get:function(){return property;},
    set:function(val){property=val;} 

*/
// follow this link to know about seal method for objects:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
// follow this link to know about freeze method for objects:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

/**
 * Function Object:
 * 
 */
/**
 * Function Object:
 * it can be decalred in the 2 ways of any object or as a function statment but note
 * anonymous function "stored in var , without name" can't be hoisted and if not stored in var it will be an error.
 * constructor created function , is created every time you call it making it deficient.
 *
 * 2- IIFE "Immediatly invoked function expression"
 *    it is anonymous function , not stored in var and written as shown:
 *      (function(){
 *              return 2004;
 *          })()
 *      so it will just return 2004 and won't give an error.
 * 
 *      See this for more about IIFE-->   https://www.geeksforgeeks.org/immediately-invoked-function-expressions-iife-in-javascript/
 * 
 * 3-Arguments Collection: all parameters we pass to a function are save in collection called arguments , so if we have a function that takes just 2 arguments
 * and you pass 7 parameters to them , no error it will take the first two only , and also you can deal with the arguments as an array of dynamic size according to 
 * input , it has a property length so for example , this example is written in code in ex:5:
 * 
 * function Add(){
 *  var sum=0;
 * for(var i=0;i<arguments.length;i++)
 *  sum+=arguments[i];
 * return sum;
 * }
 * 
 * 4-Methods of function object:
 *  call , apply and bind methods : they are used to apply the called function to another object in case this another object can't call this function
 * like join function on strings , see Ex6 below:
 */

// EX5:
  function Add(){
   var sum=0;
  for(var i=0;i<arguments.length;i++)
   sum+=arguments[i];
  return sum;
  }
  console.log(Add(1,2,3,4,5,6,7,8,9,10));

  //Ex6

  var str3="This is Abdallah"
  //console.log(str3.join());//error
  console.log([].join.call(str3,"__")); // here the function is called by array but applied to str3
  

  //                                                                BOM (Browser Object Model)
  /**
   * It is the model for the browser environment to run js on it
   * It's objects contain
   * 1- Window which is the Parent of all objects
   * 2- history
   * 3- navigation
   * 4- location
   * 5- screen
   * 6- Document "DOM" --> important and we'll talk about it
   * 
   * 
   * 
   * 1-Window object:
   *    methods:
   *        1- window Open , seen in example 7: 
   *            Open("src","target","style")
   *        2- window.close() --> this closes the glopal window , but if you want to close a child opened window , save it in a var and call win.close() 
   *        or whatever you call it as ex 7.
   *        3-window.focus()
   *            makes your window is the focus
   *        4-moveby(x,y)
   *        5-moveto(x,y)
   *        6-resizeby(x,y)
   *        7-resizeto(x,y)
   *        8-scrollby(x,y)
   *        9-scrollto(x,y)
   *        Ex 8: for both of them
   *        
   *        Windows timer methods:
   *        
   *        1- setinterval(fn,time in ms);
   *            it takes a function fn , and executes it every interval which equals entered time.
   *        2- clearinterval(interval name);
   *            it takes a variable which equals the set interval which we set before and it stops the interval from executing forever.
   *        3- settimeout(fn,time in ms);
   *            it is the same as setinterval but differs in that it executes just one time after the given time passes.
   *        See Ex 9 : for them
   *        4- cleartimeout(name)
   *            it is used when recursion is used with settime as the function call itself one time in settimeout 
   *        see Ex 10 : to understand
   * 
   *        History object:
   *       
   *        Property:
   *        .length  -> returns how many visited pages on the tap
   *            Try history.length on console
   * 
   *        Methods:
   *            . back() , forward() // just go back and forward in your tap.
   *            . go(n) // go n pages forward , n can be negative.
   * 
   *        Location object: location from url , host name , etc...
   *        Properties
   *        location.href --> url
   *        location.protocol --> protocol http/https
   *        location.host --> host
   *        location.hostname --> same as host
   * 
   *        methods:
   *        location.replace("url")
   *            it replaces the current page with another one without creating new visited one in history
   *                try it in console.
   *        location.assign("")
   *            it visits new page after the page you're on it and no forward exists , also try it.
   *        location.search()
   *            it returns string of the query of the opened page.
   *            Query is that when you submit a form , then go to a page it is saved in the url so you can take entered data using it.
   *        location.reload() 
   *            just refreshing the page
   * 
   *        Navigator object : deals with the browser , it's engine , etc...
   *        
   *        Properties:
   *        navigator.language --> the language of the browser.
   *        navigator.cookieenablet --> is cookies enabled or not.
   *        navigator.platform --> Operating system of the client.
   *        navigator.appcodename --> browser name , it's always Mozilla on any browser.
   *        navigator.useragent --> browser data
   *            
   *        see this to detect browser: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
   *            
   * 
   *        Document Object: (DOM)
   *            document object model or html typed document.
   *            used to deal with html
   */   
  //Ex 7:
  var HelloWin;
  function HelloWorld(){
    HelloWin=window.open("HelloWorld.html","","width=300,height=300");
  }
  function CloseHelloWorld(){
    HelloWin.close();
  }
    //Ex 8:
    function MB(){
      HelloWin.moveBy(50,50);
      HelloWin.focus();
    }
    function MT(){
      HelloWin.moveTo(50,70);
      HelloWin.focus();
    }
  // It is called from hello button in html.
// Ex 9:
  var interval;
   function SI(){
    interval=setInterval(function (){
        alert("I am inevitable !")
    }, 3000);
   }
   function STI(){
    clearInterval(interval);
   }
   function OSI(){
    setTimeout(function() {
        alert("I'm Iron Man !")
    }, 1000);
}
   // Ex 10:
   var interval2;
   function OSI2(x){
    alert("I'm Iron Man !"+x)
    x++;
    interval2=setTimeout(OSI2, 1000,x);
}
function STI2(){
    clearTimeout(interval2);
   }
/**                                                         DOM
 * DOM deals with html as a tree where html is the root of the tree
 * each tag inside the html "children" are siblings ie. head and body
 * and children of head are sibling and the same for body , each one is called node.
 *      
 *                                              Html    
 *                                  Body                    Head
 *                          Div1             Div2
 *                      a1       a2       img1    a3
 * To access a specific node we use document element which we knew intro about it in BOM
 * document .body .children[0] --> gets Div 1 for example
 * or there is another easier way which is a method in document called getElementById or getElementByClassName
 * document .getElementById(id);
 * document .getElementByClassName(name);
 * also there is getElementByTagName() which select a whole tag
 * note: you can store this in a var which will contain the data of the selected nodes.
 * 
 * Selectors:
 *  you can also access nodes using selectors:
 *  1- document.queryselector(#id) or document.queryselector(.class)
 *      but note for selectors like by class name or type , it will only apply to the first mathcing element so we use option 2 below to select all matching queries
 *  2- document.queryselectorAll()
 *      but here all elements are returned as in array so we save it in a var and loop over it's elements
 * see Ex11 below:
 */
//Ex11:
function QS(){
    document.querySelector(".class1").style.backgroundColor="red";
}
function QSA(){
var elem;
    elem= document.querySelectorAll(".class1");
   for(var i=0;i<elem.length;i++)
    elem[i].style.backgroundColor="red";
}
/**
 * Note: after selecting elements is js , we can deal with all attributes as a property like in Ex11: we used style attribute as js property
 * also we can modify the content by using one of the two prperties mentioned below:
 *  1-inner Html --> here you can add html to the content. 
 *  2-inner text --> here you can add text to the content.
 */
/**
 * Some methods and properties for elements in DOM:
 * 1-classlist.add("class name") here it adds another class to the element.
 * 2-classlist.remove("class name") here it removes class from the element.
 * 3-.style --> it return the style which is written inside the style attribute in html --> note this is as I told you above attribute as a propery.
 * 4-getComputedStyle(element stored in var).style property u want --> it returns the applied style on the element.
 *  
 */
/**
 * Node Types
 * 1- root node : html
 * 2- element node: any tag in html exept html itself.
 * 3- attribute node: attributes of any tag.
 * 4- text node: content inside any element node.
 * 5- comment node: any comment in html.
 * 6- document node: the whole document itself is a node.
 * We can create a node using it's name in method create as follows
 * 1- createElement() -> method that create element
 * 2- createAttribute() -> creates attribute
 * 3- createTextNode()
 * 4- createComment()
 * Then we must put this node in html there are theese methods:
 * 1- insertbefore(a,b);
 *  node a is the new node , b is the node we want to insert a before it , see Ex12.
 * 2- a.appendChild(b);
 *      it makes a child node for b , see Ex13.
 * 
 * see this for more
 * 1-https://www.w3schools.com/js/js_htmldom_nodes.asp
 * 2-https://developer.mozilla.org/en-US/docs/Web/API/Node
 */
//Ex:12
function NN(){
    var a=document.createTextNode("New Node");
    document.body.insertBefore(a,document.querySelector('#a1'));
}
//Ex:13
function NNB(){
    const para = document.createElement("p");
    const node = document.createTextNode("This is a new paragraph.");
    para.appendChild(node);
    para.style.color="blue";
    para.style.fontSize="18px";
    //var b=document.createTextNode("New Node 2");
    var a=document.getElementById("a2");
    a.appendChild(para);
}
/**
 * DOM Collection
 * there are two main collections:
 * 1- image collection:
 *      we can access it using 
 *          1-documentimages[img number] for ex:   documentimages[0]
 *          2-documentimages["img name"] for ex:   documentimages["image1"]
 * 2- form collection:
 *      We access it like image collection but inside form there may be elements like textbox,radiobutton,etc...
 *          so we use it like:
 *               documenforms[0].element[element number]
 * the same is done for any other collection like anchor
 */

/**
 * Cookies:
 *  it is text file created by the server , exists at client side and can be only accessed by the server,
 *  also it is used by the server so it don't ask the user about his information every time he goes to a page in am website.
 *  There are two types of cookies:
 *  1- presistent cookie:
 *      it has an expirey date , after which it expires     --> deal with remember me.
 *  2- Session cookie:
 *      it expires as just as you close the browser     --> deal with just logging in without remebering
 * 
 * how to create and read cookies:
 *  to read u can use : console.log(document.cookie);
 *  to create u can use:
 *  document.cookie="cookiename="val"; expires="expirey date" " 
 *  see Ex:14
 * 
 * also Ex:15 to know how to display cookies.
 * 
 * Note: We tend to save cookies in a page that isn't the login page as the page of cookies we visit it each time we want to get cookies in any seen page in the site.
 * 
 */

//Ex:14
function SaveInfo(){
    var username=document.getElementById("un").value;
    var password=document.getElementById("p").value;
    var now=new Date(); // we know that date constructor intialize the constructing date
    now.setMonth(now.getMonth()+3); // means three month later.
    document.cookie="username="+username+";expires="+now;
    document.cookie="password="+password+";expires="+now;
}
//Ex:15
function DisplayInfo(){
    var cookies_saved=document.cookie;
   var a= document.cookie.indexOf("username");
   var s= document.cookie.indexOf(";",a);
   var d1=document.createTextNode( document.cookie.split(";",s)[0]);
   var d2= document.createTextNode(document.cookie.split(";",s)[1]);
   var p1=document.createElement("h3");
   var p2=document.createElement("h3");
   p1.appendChild(d1);
   p2.appendChild(d2);
   var x=document.getElementById("display");
   x.appendChild(p1);
   x.appendChild(p2);
}
// I can make a general function for display cookies like in Ex16:
//Ex:16
function GenDisplayCookies(){
    var AssociativeArray = [] ;
    var splitCookies=document.cookie.split(";");
    for(var i=0;i<splitCookies.length;i++){
        var x=splitCookies[i].split("=")
        AssociativeArray[x[0].trim()]=x[1];
    }
    return AssociativeArray;
}
function DisplayCookies(){
    var print=GenDisplayCookies();
    for(i in print){
        var h=document.createTextNode(i);
        var v=document.createTextNode(" : "+print[i]);
        var x=document.getElementById("display");
        x.appendChild(h);
        x.appendChild(v);
        x.appendChild(document.createElement("br"));
    }
}
//Ex 17: Remeber me & logout Examples
function SignIn(){
    var username=document.getElementById("un").value;
    var password=document.getElementById("p").value;
    var now=new Date(); // we know that date constructor intialize the constructing date
    if(document.getElementById("Remember").checked)
        now.setMonth(now.getMonth()+3); // means three month later.
    document.cookie="username="+username+";expires="+now;
    document.cookie="password="+password+";expires="+now;
}
function Logout(){
    var cookie = GenDisplayCookies();
    for(i in cookie)
        document.cookie=i+"=;expires=1-1-2001"
}
/** 
 * Events:
 *  JS is an event based language meaning that when an event is done a method applies
 * <tag onevent="fun()";>
 * 1- mouse based events:
 *      onclick="method()";
 *      ondblclick="method()";
 *      onmouseover="method()";
 *      onmouseout="method()";
 *      etc...
 * 2- keyoboard based events:
 *      onkeypress="method()";  // on pressing
 *      onkeyup="method()";     // after leaving the key
 *      onkeydown="method()";   // while pressing the key
 * 3- others:
 *      onfocus="method()";  // when focusing on box
 *      onblur="method()";   // when unfocusing the box
 *      onload="method()";   // when loading event.
 *      onunload="method()"; // when leaving event. 
 *      onerror="method()";  // when error happens
 * 4- forms:
 *      onreset="method()";
 *      onsubmit="method()";
 */

//Ex 18: is on html file within textbox line 48.

/**
 * Dropdown list:
 *      Properties: 
 *          1- .length : number of options in this list
 *          2- .selectedIndex: returns the selected index if just one is selected
 *          3- .options: array of objects , each object has .selected properties and for more than select
 *              .text & .value
 */
// this keyword refer also to the element which event occured on and we can send it as object to functions.
/**
 * As we said before , as onevent is attribute for html , we can deal with it as object property in js directly
 * Ex:
 * let var x= document.getobjectbyid("btn");
 *          x.onclick=func;  // without brackets wherever your function doesn't return a function or return anonymous function 
 */
/**
 * Some elements has default onvent bevahoir like anchor tag , goes automatically to visit the href 
 * to prevent it just put onevent="return false;"
 * see Ex18:
 */

//Ex18:
function checkReset(){
    var response=confirm("do u want to clear the form ?")
    return response
}
/**
 * There is an object for event or event object which is implicity created on event and it's name is event and you can send it to a function to use it's properties
 * ,it has a method called prevent default() which do the same as in ex:18
 * some event properties:
 *  1- offest x : x coordinates from inner border ie:not including padding in Origin.
 *  2- client x : // // // // // //  outer border ie:including padding in Origin.
 *      same for y
 *  3- .target : target tag of the event
 *  4- .type: type of event
 *  5- cancel bubble : see this link
 *      https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble
 * Methods:
 *  1- preventdefault() // prevent the default action to happen
 *  2- stopPropagation() // it stops the propagation of the event to bubble
 *      capture mode: is when event happens in child div it begins from grandparent down to child
 *      bubble mode : event will start from child and goes up to grandparent
 *      so we can say that it stops actions from spreading to outer elements if exist 
 *  3-object.addEventListner("event",func,true or false) // false is default for bubble mode and true is for capture mode
 * 
 * 
 */
/**
 * Custom Event creation:
 * 1- create:
 *  create event object using constructor that takes it's name:
 *  var myevent=new event("seen") // the suppose the event is called seen.
 * 2- listen:
 *  The object that will listen to the event , or which the event will fall on.
 *  we use object.addEventListner("event",func,true or false) 
 *  // func is what will happen when it is fired.
 * 3- fire: define when will the event fire 
 *      object.dispatchEvent("event")   this will fire the event.
 */
/**
 * AJAX "Asynchronus javascript and xml"
 * it is used in retreiving data to the client from the server without refreshing and Asynchronusly.
 * to create AJAX we need XHR object which is an API:
 *  properties: 
 *  1- .onreadystatechange 
 *  2- .readystate
 *  states are:
 *      1-Uninitialized
 *      2-Loading
 *      3-Loaded
 *      4-Interactive
 *      5-Complete
 *  3- .status : return status as number
 *      200 for OK
 *      404 for PageNotFound
 *      503 for fallen server
 *      from 100 to 199 -> means info
 *      from 200 to 299 -> means succeded
 *      from 300 to 399 -> Redircted
 *      from 400 to 499 -> NotFound "Client Error"
 *      from 500 to 599 -> Server Error
 *  4- .statusText : return status as a text.
 *  5- .responseText : returns response as a text.
 *  
 * Methods:
 *  1-open("method","url",[options])
 *      method can be get or post request.
 * know more about the methods here : https://apidog.com/blog/get-vs-post-request-the-difference-between-http-methods/
 *  2-Send(content) , content is sent with post request and generally it is used to send the request.
 * 
 * How to construct it:
 *      var xhttp = new XMLHttpRequest();
 * -----------------------------------------------------------------------------------------------------------------------
 * 
 * We mostly use json files to save and retrieve our data , see this links for more
 *  https://fileinfo.com/extension/json#google_vignette
 *  https://www.w3schools.com/js/js_json_intro.asp
 * 
 * methods used with retrived json object from responseText
 *  1- JSON.parse(json object)  it return java script object
*  2- JSON.stringfy(java script object) it return json object
*/
//
//------------------------------------------------------------------------------------------------------------------------
/*
You can see this oop crash course for js if u want to learn more:
    https://www.youtube.com/watch?v=vDJpGenyHaA
*/
/*
Some OOP:
1-we can define our own object using factory method or constructor method which are discussed above in object object on line 410.
------------------------------
Function Shared Pattern:
    it is when we define a function and use it inside a constructor so u can use it inside or outside the constructor.

------------------------------
Prototype Property:
    Each function has prototype property which is that you can define a function associated with your defined funciton , 
    we use it with the constructor so we don't create the method of your created object every time u create it.

    see the difference in the Ex below:
    1- :
        var student=function(name,id,sec){
            this.StudentName: name,
            this.StudentId:id , 
            this.StudentSection:sec,
            this.StudentInfo: function(){
                console.log("The student name is "+ this.StudentName +" His Id is "+this.StudentId);
            },
    } 
    here every time you create object using this constructor the function of student info is created 
    2-:
        var student=function(name,id,sec){
            this.StudentName: name,
            this.StudentId:id , 
            this.StudentSection:sec,
    }   
        student.prototype.StudentInfo= function(){
                console.log("The student name is "+ this.StudentName +" His Id is "+this.StudentId);
            };
---------------------------------
you can also override functions using prototype like the tostring function we mentioned before in object object , and you can override it in your own object like this ex:
  var student=function(name,id,sec){
            this.StudentName: name,
            this.StudentId:id , 
            this.StudentSection:sec,
    }   
        student.prototype.tostring= function(){
                return("The student name is "+ this.StudentName +" His Id is "+this.StudentId);
            };
--------------------------------

You can overload constructor by just setting default values so you can use it with different arguments!.

---------------------------------
Private members are just the local variables defines as var like:
  var student=function(name,id,sec,age){
            this.StudentName: name,
            this.StudentId:id , 
            this.StudentSection:sec,
            var age:age;
    } 
            here age is private member
            and you can access it by setters and getters , but note this functions are inside the constructor & not prototype.
            --> setters and getters are called privilage methods.

-------------------------------
private methods are just inner functions , not defined in this.funName()
but note:if this.variableName is inside a function and this function isn't called from object it will search globally which may get undefined "implicit bining"
so we use call and bind functions mentioned above at line 470 so we can me "explicit binding".


!!!!! IMPORTANT 
 !!!!!!   Understand the this, closure and inner functions !!!!!!

-------------------------------------------------------------------
Note:
    All non-primitive type objects are reference values.
so for ex1:
      var student=function(name,id,sec,age){
            this.StudentName: name,
            this.StudentId:id , 
            this.StudentSection:sec,
            var age:age;
    } 
            var st1=student("Safan",12,1,20);
            st2=st1;
            here if I change any thing is st2 it will change in st1 too this is what I meant by refernce

            if you want to just copy it ie. copy constructor equivalent: see this;
            st2=student()
                for(var i in st1){
                    st2[i]=st1[i];
                }
-------------------------------------------------------------------
*/

var student2= function(name,id,sec){
    this.StudentName1= name;
    this.StudentId1 = id ;
    this.StudentSection1=sec;
   // var ag= age;
} 
student2.prototype.tostring= function(){
    return("The student name is "+ this.StudentName1 +" His Id is "+this.StudentId1);
};
    var stu1=new student2("Safan",12,1,20);
    stu2=stu1;
    var stu3=new student2("Safan",12,1,20);
    var stu4=new student2();
    for(var i in stu3){
        stu4[i]=stu3[i];
    }
    console.log(stu1.tostring());
/*
 ------------------------------------------------------------------------

 object.__proto__           --> will return the functions in the prototype if the object and if you add another one like
 object.__proto__.__proto__     --> will return the functions in the parent of the object which is almost the object
 and keeps untill null or find nothin and this is called prototype chain.

 -------------------------------------------------------------------------
    Inheritance:
        we can inherit the whole constructor or class as a prototype for the child "PseudoClassical inheritance"ex:
            child.prototype=new parent();
            // it must come before any prototype function adding as it will replace them.
        or we can inherit just the prototype of the parent "prototype inheritance"ex:
            child.prototype=parent.prototype();
        and the best way is to call the constructor of the parent object inside the child constructor but we use call or bind to 
        force it to work on this "child" object and then make the two prototypes equal but as instance not always so edits in child won't apply on parent
        ex:
        function child(nm,id){
            parent.call(this,nm);
            this.ID=id;
        }
            child.prototype=Object.create(parent.prototype);

            here the child will contain both person and child methods and properties
        
        A Question: what is the difference between the first and third way of inheritance ?
        Answer    :1- in the first way methods and properties of parent are not assigned directly to child but as an instance.
                   2- in the first way the constructor of the object is the child one but in the third method the constructor is 
                   the parent one as it will be the first seen from the object object "parent of all objects" unless you define
                   the constructor of the child in the prototype chain so it will not level up to object object.
                   3- the parent objects can access the child methods and properties in the third way unless you make it abstract
                   by checking the constructor and if it is from the parent throw exception . 

                   note: if we didn't make the parent prototype as an object , in answer 2 what we did will make the child constructor 
                   the constructor for parent too so we'd have been in a cycle running around each other :)

        So inheritance in js is called delegation behavoir : we link the child to parent through prototype chain and not copying like in 
        other languages.

            if we've overriden a function in the child prototype we can use __proto__ to reach the function of the parent without overriding.

 -------------------------------------------------------------------------
 we can create static member || "class member" for our class by adding it as a property to the constructor itself ex:
    var student2= function(name,sec){
    this.StudentName1= name;
    this.StudentSection1=sec;
   // var ag= age;
} 
   student2.id=0;
    and it will be only accessible through the constructor function.
 -------------------------------------------------------------------------

 */
 var student3= function(name,sec){
    this.StudentName2= name;
    this.StudentSection2=sec;
   // var ag= age;
} 
   student3.id2=0;
   var std55=new student3("Boody",1);