const { response } = require('express');
const Task = require('../models/task');
;
// get all task

async function getAllTasks(req , res){
     
        const tasks = await Task.find({}) ;
        res.status(200).json({tasks});
    
    
}

// get a task

async function getTask(req , res){

   const {id } = req.params; 
   const task = await Task.findOne({_id : id}) ;
   return res.json(task);
}

// create a task

async function createTask(req ,res){
    let {name }= req.body
    
        await Task.create({name}) ;
        return res.json({message  : "task created succesfully "}); 
}


async function deleteTask(req ,res){
    
    const {id} = req.params ;
        const task = await Task.findByIdAndDelete({_id : id});
        res.status(200).json({message : `Task deleted successfully ` , Task : `${task}`})
    
}

async function updateTask(req ,res){
    const {id} = req.params;
    const data = req.body ;
    const task = await Task.findOneAndUpdate({_id : id} , data ,{ new :true , runValidators :true}) ;
    return res.json({message  : "task updated  succesfully" , task : `${task}`});
}

module.exports = {deleteTask , getTask , getAllTasks , updateTask , createTask}
