const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    studentId:String,
    rollNumber:String,
    name:String,
    department:String,
    branch:String,
    placementYear:String,
    companyName:String,
    designation:String,
    salary:String,
    placementStatus:String
})

module.exports = mongoose.model('file_657165fdaca66988677fb455',Form)