(function (context,modname,definition){
    if(typeof module!=="undefined"&&module.exports){
         //server side
        module.exports=definition();
        }
    else{
         // client side  
        context[modname]=definition();
    }})(this,"shoppingcard",()=>{
        const api={
            name:"Hello API!",
            description:"Welocome to my first created API....."
           }
        return api;
    });
    // see app.js for running this api on server side and try.html for this api on client side.