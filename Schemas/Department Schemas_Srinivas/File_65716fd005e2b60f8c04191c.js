const mongoose = require('mongoose')    //Academic performance in second year only (Average GPA)

const Form = new mongoose.Schema({
    studentName:String,
    registrationNumber:String,
    departmentProgram:String,
    yearOfEnrollment:String, 
    secondYearGpa:String, 
    numberOfSubjectsTaken:Number, 
    sgpaSemesters3And4:Number, 
    backlogsSecondYear:Number, 
    rankSecondYear:String
})

module.exports = mongoose.model('forms',Form)