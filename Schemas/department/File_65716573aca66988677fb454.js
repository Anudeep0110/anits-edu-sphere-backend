const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    dept_id:String,
    studentId:String,
    courseName:String,
    grade:String,
    averageGPA:String
})

module.exports = mongoose.model('file_65716573aca66988677fb454',Form)