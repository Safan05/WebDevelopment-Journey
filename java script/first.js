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
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
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