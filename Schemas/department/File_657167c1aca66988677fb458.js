const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    studentName:String,
    rollNumber:String,
    examinationName:String,
    level:String,
    rankScore:String,
    year:Number,
    subjectCategory:String,
    collegeAdmitted:String,
    admissionYear:Number
})

module.exports = mongoose.model('file_657167c1aca66988677fb458',Form)