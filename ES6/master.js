/**
 * let vs var
 * var : is a function scope & hoisted
 * let : is a block scope & not hoisted
 * ex:
 * function(n){
 * for(var i=0;i<n;i++)
 *  console.log(i);
 * console.log(i);
 * }
 * it can be done here as 'i' is within the whole function not the for block it is defined in
 * 
 * but if it was
 * for(let i=0;i<n;i++){
 *  console.log(i);
 * }
 * console.log(i);// this will be error as it is just in the for loop "it's block" scope
 */



function count(n){
    for(var i=0;i<n;i++)
      console.log(i);
    console.log(i);
}
function count2(n){
    for(let i=0;i<n;i++)
      console.log(i);
    console.log(i); // this will be error.
}
count(5);
//count2(5);      // commented to prevent error

console.log(x); // hoisted as var , no error but value undefined
//console.log(y); // non hoisted as let , error occurs!       // commented to prevent error

var x=10;
let y=5;
// let also have solved the closure problem we had when pushing function in array inside a loop
/**
 * const is the same a let but the value will be assigned just one time.
 */

/**
 * Rest parameter:
 * Do you remember arguments of a function??
 *  rest paremeter must the last input in a function, we write ... before it , and so it will become as an array containing the rest 
 *  of input arguments , but arguments become as it is ? 
 *      still not understaning?
 *          run Ex2:
 */
//Ex2:
    function ex2(a,b,...c){
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(arguments[0]);
        console.log(arguments[1]);
        console.log(arguments[2]);
        console.log(arguments[3]);
        console.log(arguments);
    }
    // uncomment and run to understand.
  //  ex2(1,2,3,4,5,6,7,8,9,10);

  /**
   * Spread operator:
   *    it is also ...
   *    it is used to spread an array ex:
   *    if you have an array "arr" and you want to write it's values for any reason like 
   *    :"arr[0],arr[1],arr[2]" now instead of this u can write "...arr" it will do the same.
   * see Ex3:
   */
  //EX3:
    var arr=["Ce","Moi"];
    console.log(`${arr[0]} ${arr[1]}`);
    console.log(...arr)
    /**
     * We can use spread operator to solve that all objects are reference problem:
     *  do u remember when we wanted to create an object that has same values of another one without being linked by ref
     *  we did a for loop like this:
     *     var stu3=new student2("Safan",12,1,20);
           var stu4=new student2();
           for(var i in stu3){
           stu4[i]=stu3[i];
         }
     *
     *
     * but now we can just use spread operator like:
     * stu4={...stu3};   
     * 
     * see Ex4:
     * 
     * and same are for arrays
     * */
    //Ex4:
    var student2= function(name,id,sec){
        this.StudentName1= name;
        this.StudentId1 = id ;
        this.StudentSection1=sec;
       // var ag= age;
    } 
    var stu1=new student2("Safan",12,1,20);
    stu2={...stu1};
    console.log(stu2.StudentName1);

    /**
     * their is also array destructuring , note this is not a destructing.   
     *  see this video:https://maharatech.gov.eg/mod/hvp/view.php?id=8132
     * Ex5 on array destructuring. 
     */
    //Ex5;
    var narray=["red","green","blue","white","black","yellow"]
    var [r,,b,w,...re]=narray;
    console.log(r);
    console.log(b);
    console.log(w);
    console.log(re);
    /**
     * their is also object destructuring , note this is not a destructing.   
     *  see this video:https://maharatech.gov.eg/mod/hvp/view.php?id=8133
     */

    /**
     * Arrow Function:
     *  var fun=(parameters)=>{
     *          //
     *          //
     *      }
     * it's used when defined inside an object as it binds this of the caller object as it's inside this;
     *  see theese 3 different examples 6.1,6.2 and 6.3
     * 
     * so arrow function doesn't have this so it bind the this with it's environment
     */
    // Ex 6.1
    var obj1={
        name:"Abdallah",
        age:"20",
        display:function(){
            setTimeout(function(){
                console.log(this.name); // what is the output expected?
            },0)
        }
    }
    // Ex 6.2
    var obj2={
        name:"Abdallah",
        age:"20",
        display:function(){
            var that=this;
            setTimeout(function(){
                console.log(that.name); // what is the output expected?
            },0)
        }
    }
    // Ex 6.3
    var obj3={
        name:"Abdallah",
        age:"20",
        display:function(){
            setTimeout(()=>{
                console.log(this.name); // what is the output expected?
            },0)
        }
    }
   // uncomment the 3 next lines to run the example
    /*
    obj1.display();     //undefined
    obj2.display();     //Abdallah
    obj3.display();     //Abdallah
    */
    /**
     * String Improvents:
     *  there are some newly added methods:
     *      1-string.trim()     // used for space trimming before and after text.
     *      2-string.trimLeft() & string.trimRight()    // trim just spaces at left and right of the text.
     *      3-string.startsWith("substr")   // return boolean if it starts with a given substr.
     *      4-string.endsWith("substr")   // return boolean if it ends with a given substr.
     *      5-string.includes("substr")   // return boolean if it includes a given substr.
     *      6-string.repeat(num)    // repeat the string num times.
     *      7-string.fromCodePoint(ascii code)  // converts ascii code into char.
     * more:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
     * 
     *      String template:
     *          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
     * 
     */

    /**
     *  Iterable objects:
     *      it is objects that have iterators like: array , string & map.
     *      the iterator is got from array by [symbol.iterator()]
     *      see this Example:
     */
        // iterators ex:
            var itarray=[1,2,3,5,6,7]
            var iter=itarray[Symbol.iterator]();
    /**
     * iter is now iterator object and has the .next() function , which just gets the next value inside the iterable object and a boolean desctibring wheather we are 
     * done with iterations on the object or not.
     * 
     */
        /**uncomment to run the Example */
        /*
        console.log(iter);
        console.log(iter.next());
        console.log(iter.next());
        */
    /**
     * Class keyword:
     *  it is a keyword added in ES6 to be used in creating classes , we add the constructor , setters , getters , methods and data members inside it  
     *      methods and objects now can take keyword static and can be only accessed through the class as usual.
     *      methods and objects can now be defined directly as private using # before it and it must be defined before constructor.
     * see Ex: 7 for classes
     */
    // Ex:7
        class person{
            #number;
            constructor(name,age,num){
                this.PersonName=name?name:"";
                this.PersonAge=age?age:1;
                this.#number=num;
            }
            get PersonNm(){return this.PersonName;}
            get PNum(){return this.#number;}
            set PersonNm(val) {this.PersonName=val;}
            static PersonsCount(){
                console.log("Static Function");
            }
            static sti=0;
        }
        var moi=new person("Abdallah",20,"01098899071");
        console.log(moi.PersonName);
        console.log(moi.PersonAge);
        console.log(moi.PersonNm);
        person.PersonsCount();
        console.log(++person.sti);
        console.log(++person.sti);
        console.log(++person.sti);
        console.log(moi.number);        // will be undefined
        console.log(moi.PNum);
       // console.log(moi.#number);     // commented as it will gets error
    /**
     * Note: we can also use prototype and other used things in the constructor we made using js before ES6.
     *  we deal with the class as the constructor function we did before so there is a prototype chain.
     *      we can override using it like before.
     *          Ex: toString() -> will return object object as it exists in it , but if we redifined it in our class it will output the redifined one "overriden"./
     * 
     * Inheritance:
     *  we can make child class now using extend keyword the followin "class child extends parent"{
     *                                                              
     *                                                                  }
     *  there is also super , which is the function that calls the parent constructor and pass the values to it.
     *  see Ex8 for more:
     */
    // Ex8:
        class std extends person{
            constructor(name,age,id){
                super(name,age);
                this.Id=id;
            }
        }
        // uncomment to run the Ex.
        /*
        var stdMoi=new std("Safan",19,"9230554")
        console.log(stdMoi.PersonName);
        console.log(stdMoi.Id);
        */
    /**
     * We can make an object iterable by adding the [Symbol.iterator]() funciton inside it and make it return object containing next function , that return val and done.
     * Or we can use *gen() function:
     * it is defined by 
     * function * "name"(){
     * 
     * }
     * there is yield keyword , which is put inside the generator function , making it iterable on the yields
     *  https://maharatech.gov.eg/mod/hvp/view.php?id=8068
     * see this video for more.
     */

    /**
     * Symbol:  it is a primitive data type added in ES6.   
     *  know abuot it here:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
     */



    /**
     * Async :
     *  async functions
     *      at first to know async vs sync programming see this video:   https://www.youtube.com/watch?v=qsncfaOUpyg
     *      more advanced video : https://www.youtube.com/watch?v=0vFgKr5bjWI&t=200s
     *  so functions with callbacks are async functions , ex: setTimeout & setInterval functions
     *  but what if you are having alot of callbacks 
     *  see Ex9:
     */
    //Ex9:
    function callBackHell(){
        let x=1;
         (function(){
            let y=2;
            let z=x+y;
            console.log(`l1 ${z}`);
            (function(){
                let k=5;
                let a=k+z;
                console.log(`,l2 ${a}`);
                (function(){
                    let l=8;
                    console.log(`,l3 ${l+a}`);
                })()
            })()
        })();
    }
    // uncomment the call of the function to run the example.
    callBackHell();
    console.log("Ecoute moi!")
  /**
   * and now , do u see that this function with alot of callbacks regulated , or comfortable to eye ?
   *            can u trace it?
   * So we use promises:
   *    Promises are used to prevent callBackHell and also it ensures that callBack functions are async meaning the rest of code won't wait untill they are done
   *    The executor function of a Promise is always executed synchronously.
   *    Any asynchronous operations inside the executor function will run asynchronously, and their results will be handled asynchronously.
   *    The then and catch handlers will be executed asynchronously, after the current call stack is cleared.  
   *     see Ex10:
   * */

    //Ex10:
    // uncomment the example to run it
     /*   var pr=new Promise(function(success,failure){
            success();
        })
        pr.then(function(){
            var z=0;
            for(var i=0;i<10000000000;i++)
                z++;
            console.log("Promise is executed !")
        })
        console.log("waiting for the promise ... ")
    */

    // learn more about chained promises here: https://www.youtube.com/watch?v=EOysmTtZzzc&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=181