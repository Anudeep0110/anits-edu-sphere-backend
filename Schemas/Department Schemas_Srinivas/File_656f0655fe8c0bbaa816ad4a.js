const mongoose = require('mongoose')  // NPTEL/SWAYAM courses completed by students 

const Form = new mongoose.Schema({
    studentName:String,
    studentId:String,
    courseTitle:String,
    courseInstructor:String, 
    coursePlatform:String, 
    courseCompletionDate:String, 
    courseCertificateURL:String
})

module.exports = mongoose.model('forms',Form)