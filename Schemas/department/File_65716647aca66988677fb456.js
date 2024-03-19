const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    dept_id:String,
    studentId:String,
    name:String,
    department:String,
    branch:String,
    degree:String,
    university:String,
    yearOfAdmission:String,
    yearOfCompletion:String,
    ongoing:String,
    researchArea:String
})

module.exports = mongoose.model('file_65716647aca66988677fb456',Form)