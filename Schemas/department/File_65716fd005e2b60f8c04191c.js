const mongoose = require('mongoose')    // Academic performance in second year only (Average GPA)

let File_65716fd005e2b60f8c04191c;
if (mongoose.models.file_65716fd005e2b60f8c04191c) {
    File_65716fd005e2b60f8c04191c = mongoose.model('file_65716fd005e2b60f8c04191c')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
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
File_65716fd005e2b60f8c04191c = mongoose.model('file_65716fd005e2b60f8c04191c',Form)
}
module.exports = File_65716fd005e2b60f8c04191c