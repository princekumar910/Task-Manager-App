const express = require('express') ;
const route = express.Router() ;
const {deleteTask , getTask , getAllTasks , updateTask , createTask} = require('../controllers/task')

route.get('/' , getAllTasks) ;

route.post('/' , createTask) ;

route.get('/:id' , getTask) ;

route.patch('/:id' , updateTask) ;

route.delete('/:id' ,deleteTask ) ;

module.exports = route ;