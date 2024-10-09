const mongoose = require('mongoose');
const express = require('express') ;
const app = express();
require('dotenv').config() ;
async function connectDB(){
   try {
    console.log("connecting to database...")
    await  mongoose.connect(process.env.MONGO_URI , {
        useNewUrlParser : true ,
        useCreateIndex : true ,
        useFindAndModify : false,
        useUnifiedTopology :true,
    } );
    console.log("connected to database")
    app.listen(8000 , ()=>{
        console.log("listening") ;
    })
  

    app
   } catch (error) {
      console.log(error);
   }
}


module.exports = {connectDB , app} ;