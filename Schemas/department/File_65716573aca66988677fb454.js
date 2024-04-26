const mongoose = require('mongoose')
let  File_65716573aca66988677fb454;

if (mongoose.models.file_65716573aca66988677fb454) {
    File_65716573aca66988677fb454 = mongoose.model('file_65716573aca66988677fb454')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    studentId:String,
    courseName:String,
    grade:String,
    averageGPA:String
})
File_65716573aca66988677fb454 = mongoose.model('file_65716573aca66988677fb454',Form)
}
module.exports = File_65716573aca66988677fb454 