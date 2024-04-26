const mongoose = require('mongoose')  // NPTEL/SWAYAM courses completed by students 
let File_656f0655fe8c0bbaa816ad4a;

if (mongoose.models.file_656f0655fe8c0bbaa816ad4a) {
    File_656f0655fe8c0bbaa816ad4a = mongoose.model('file_656f0655fe8c0bbaa816ad4a')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    studentName:String,
    studentId:String,
    courseTitle:String,
    courseInstructor:String, 
    coursePlatform:String, 
    courseCompletionDate:String, 
    courseCertificateURL:String
})
File_656f0655fe8c0bbaa816ad4a = mongoose.model('file_656f0655fe8c0bbaa816ad4a',Form)
}
module.exports = File_656f0655fe8c0bbaa816ad4a