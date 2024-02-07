const mongoose = require('mongoose')    // Academic performance in second year only (Average GPA)

const Form = new mongoose.Schema({
    studentName:String,
    registrationNumber:String,
    departmentProgram:String,
    yearOfEnrollment:String, 
    secondYearGpa:String, 
    numberOfSubjectsTaken:String, 
    sgpaSemesters3And4:String, 
    backlogsSecondYear:String, 
    rankSecondYear:String
})

module.exports = mongoose.model('file_65716fd005e2b60f8c04191c',Form)