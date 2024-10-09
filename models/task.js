const mongoose =require('mongoose') ;

const taskSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : [true , "Please enter task name"],
        trim :true ,
        maxlength : [20 , 'maximum length is 20'],
    } ,
    completed : {
        type : Boolean ,
        default : false
    }
})

module.exports = mongoose.model('Task' , taskSchema);