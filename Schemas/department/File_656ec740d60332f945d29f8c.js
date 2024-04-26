const mongoose = require('mongoose')
let File_656ec740d60332f945d29f8c;

if (mongoose.models.file_656ec740d60332f945d29f8c) {
    File_656ec740d60332f945d29f8c = mongoose.model('file_656ec740d60332f945d29f8c')
} else {
//Form name : Percentage of new courses introduced out of the total number of courses
const Form = new mongoose.Schema({
    dept_id:String,
    departmentName:String,
    yearOfStudy:String,
    grantType:String,
    visitedOrganization:String,
    visitPurpose:String,
    visitStartDate:String,
    visitEndDate:String,
    numberOfStudents:String,
})
File_656ec740d60332f945d29f8c = mongoose.model('file_656ec740d60332f945d29f8c',Form)
}
module.exports = File_656ec740d60332f945d29f8c