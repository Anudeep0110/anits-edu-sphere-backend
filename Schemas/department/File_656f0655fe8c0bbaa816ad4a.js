const mongoose = require('mongoose')  // NPTEL/SWAYAM courses completed by students 

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

module.exports = mongoose.model('file_656f0655fe8c0bbaa816ad4a',Form)