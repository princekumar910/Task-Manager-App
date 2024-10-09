const { response } = require('express');
const Task = require('../models/task');

// get all task

async function getAllTasks(req , res){
     try {
        const tasks = await Task.find({}) ;
        res.status(200).json({tasks});
     } catch (error) {
        return  res.json(error) ;
     }
    
}

// get a task

async function getTask(req , res){

    const {id } = req.params;
try {
    
    const task = await Task.findOne({_id : id}) ;
   
    if(!task){
        return res.json({message : "Task Doesn,t exit"});
    }

   return res.json(task);

   
} catch (error) {
    console.log(error) ;
}
       
    
}

// create a task

async function createTask(req ,res){
    let {name }= req.body
    
      try {
        await Task.create({name}) ;
        return res.json({message  : "task created succesfully "}); 
      } catch (error) {
        return res.json({message : "Some error happened"})

      }
   
}


async function deleteTask(req ,res){
    
    const {id} = req.params;
   try {
      const task = await Task.findByIdAndDelete({_id : id});
      
      if(!task){
          return res.json({message : "Items doesn't have with id"});
        }
        
        res.status(200).json({message : `Task deleted successfully ` , Task : `${task}`})
    } catch (error) {
        res.status.json(error) ;
    }
}

async function updateTask(req ,res){
    const {id} = req.params;
    const data = req.body ;
   console.log(data);
    const task = await Task.findOneAndUpdate({_id : id} , data ,{ new :true , runValidators :true}) ;
    console.log(id);
    return res.json({message  : "task updated  succesfully" , task : `${task}`});
}

module.exports = {deleteTask , getTask , getAllTasks , updateTask , createTask}
