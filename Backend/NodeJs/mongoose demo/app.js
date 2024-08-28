// note: before this file you must read all files in the express.demo folder well & read the mongodb folder files.

// 1) Require mongoose
const mongoose=require("mongoose");
// 2) coneect to the db using mongoose.connect() which is a promise by the way.
mongoose.connect("mongodb://localhost:27017/Safan").then(()=>{console.log("Database connected");}).catch((err)=>{console.log(err);});
// 3) create schema using new mongoose.schema({
//  attr:type
//})
const BookSchema = new mongoose.Schema({
    Title:{
       type:String,
       required:true
    },
    id:{
        type:String,
        unique:true
    },
    Pages:{
       type:Number,
       min:20,
       required:true
    },
    size:{
        type:String,
        enum:["A4","A3","A2","A1"]
    }
});
// 4) create model on the collection name of this schema.
const Book=mongoose.model("books",BookSchema);
// now this model is like db.collectionname in mongodb in ide 
// most of the coming queries we already have used it in mongodb course.
// see this to know about queries: https://mongoosejs.com/docs/queries.html

// for finding every thing:
Book.find({}).then((data)=>{console.log(data);});

// to find specific thing there are 2 methods:
// method 1)
Book.find({id:"2"}).then((data)=>{
    console.log("###########################"); // just to be separator
    console.log(data);});
// method 2)
Book.find().where("id").equals("2").then((data)=>{
    console.log("###########################"); // just to be separator
    console.log(data);});

// so to make a function to get all data just when calling it to use it in the controller we make the following async function:
async function getAllBooks(){
    let result = await Book.find({});
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log(result);
}
getAllBooks();

function addBook(Title,id,Pages,size){
    let bk=new Book({
        Title: Title,
        id:id,
        Pages: Pages,
        size: size
    })
    bk.save().then(()=>{console.log("Book Added");}).catch((err)=>{
        for(let e in err.errors){
            console.log(err.errors[e].message);     // to handle the validations err and then the program continues running regularly
        }
    });
}
addBook("SS2","7",19,"A3");

/*
1-.find().limit(number)  --> it just display documents with maximum limit of this number from beginning
2-.find().skip(number)  --> it skips the first "number" elements then begin to display after them from beginning
	Note: You can use both so you have a limit after the skipped docs
3-.find().sort({field:1}) 1 or true for ascending and -1 for descending
	Note: sort doesn't really apply
4-.find().select({fieldA:1,filedB:-1})  1 to display fieldA and -1 to hide fieldB.

you can find with operators like pages>100 or pages<100 but we write operators in latext:
	1-$gte >=
	2-$gt  >
	3-$lt  <
	4-&lte <=
	5-$ne  !=
Books.find({pages:{$ne:100}}) : here it will return documents that have pages not equal to 100. 

You can use and , or operators on your questions too but they are written in latex also:
	1-find({$and:[{pages},{size}]})
	2-find({$or:[{pages},{size}]})
Note1:you can use in instead of or if you ask for the same field ex:
	find({Title:{$in:["val1","val2","val3"]}})
Note2:you can use exists:bool to ask if this field exists ex:
	find({Title:{$exists:true}})	--> this will return objects that contain Title property.
Note3: you can make find just returns the fields you want from each document by projection
	Projection structure is as follows: find({Query},{Projection}) , query can be empty but it must exists
	ex:
	find({},{Title:1, Pages:1}) --> this will return also Title and pages fields.


You can use regular expressions "Regex" too inside match in validations or inside queries
Regex is written inside /abc/   , this will query for string that contain abc , /^[AB]/ this will query 
for string that starts with A or B , etc...


you can create custom validator as following 
{
validate:{validator:function(v){return condition.test(v)}};
}
learn more about regex from here -->https://youtu.be/rhzKDrUiJVk?si=KUlcXGMGuQFQOvDm


Now let's return to express demo and create a new model to deal with db.
*/