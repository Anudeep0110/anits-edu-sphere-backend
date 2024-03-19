const mongoose = require('mongoose')

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
});

module.exports = mongoose.model('file_656ec740d60332f945d29f8c',Form)