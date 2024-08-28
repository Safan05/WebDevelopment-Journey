const fs=require("fs");
const path=require("path");
const StdPath=path.join(path.dirname(require.main.filename),"data","students.json")
module.exports=class Students{
    constructor(nm,age){
        this.name=nm;
        this.Age=age;
      //  this.id=students.length+1;
    }
    saveStudent(){
      let students=[];
      fs.readFile(StdPath,(err,data)=>{
        if(!err){
            students=JSON.parse(data);
            this.id=students.length+1;
            students.push(this);
            fs.writeFile(StdPath,JSON.stringify(students),(err)=>{
                console.log("err");                    
            })
        }
      })
    }
    static fetchAllStudents(callback){
        fs.readFile(StdPath,(err,data)=>{
          if(!err){
              callback(JSON.parse(data));
          }
          else
              callback([]);
        })

    }
    static getById(id){
        let students=[];
        fs.readFile(StdPath,(err,data)=>{
          if(!err){
              students=JSON.parse(data);
          }
        })
        let std=students.find((val,idx,arr)=>{return val.id==id});
        return std;
    }
}