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

4-for in: will be discussed later
for(in){

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
        */
var x=String("Abdallah Ahmed");
console.log(x.length);