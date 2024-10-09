const express = require('express') ;
// const app = express();
const taskRoute = require('./Router/task')

const {connectDB , app} = require('./ConnectDB/connect')
app.use(express.json()) ;
app.use('/api/v1/tasks' , taskRoute ) ;
app.use(express.static('./public'))
// connect to database

connectDB();


// app.get('/' , (req , res)=>{
//    return res.json({message : "hello"});
// }) 

