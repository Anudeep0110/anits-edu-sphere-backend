const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    studentId:String,
    fundingReceived:Number,
    name:String,
    department:String,
    branch:String,
    startupName:String,
    natureOfBusiness:String,
    yearOfFounding:Number,
    teamSize:Number,
    currentStatus:String
})

module.exports = mongoose.model('file_65716685aca66988677fb457',Form)