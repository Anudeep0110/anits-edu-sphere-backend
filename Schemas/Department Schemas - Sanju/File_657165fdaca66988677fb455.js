const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    studentId:String,
    rollNumber:String,
    name:String,
    department:String,
    branch:String,
    placementYear:Number,
    companyName:String,
    designation:String,
    salary:Number,
    placementStatus:String
})

module.exports = mongoose.model('file_657165fdaca66988677fb455',Form)