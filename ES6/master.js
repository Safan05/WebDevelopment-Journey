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
    obj1.display();     //undefined
    obj2.display();     //Abdallah
    obj3.display();     //Abdallah
    /**
     * Promises
     */
    var p=new Promise(function(success,failure){
        var z=0;
        for(let i=0;i<=1000000000;i++)
            z++;
        success(z);
    })
    p.then(function(val){
        console.log(`Hello From Promise ! ${val}`);
    })
    console.log("Waiting for promise ...")