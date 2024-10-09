const express = require('express') ;
const route = express.Router() ;
const {asyncWrapper} = require('../middleware/async') ; 
const {deleteTask , getTask , getAllTasks , updateTask , createTask} = require('../controllers/task')

route.get('/' , asyncWrapper(getAllTasks)) ;

route.post('/' , asyncWrapper(createTask)) ;

route.get('/:id' , asyncWrapper(getTask)) ;

route.patch('/:id' , asyncWrapper(updateTask)) ;

route.delete('/:id' ,asyncWrapper(deleteTask) ) ;

module.exports = route ;