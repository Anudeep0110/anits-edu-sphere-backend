const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    dept_id:String,
    studentId:String,
    fundingReceived:String,
    name:String,
    department:String,
    branch:String,
    startupName:String,
    natureOfBusiness:String,
    yearOfFounding:String,
    teamSize:String,
    currentStatus:String
})

module.exports = mongoose.model('file_65716685aca66988677fb457',Form)