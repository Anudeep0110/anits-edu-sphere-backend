const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    departmentName:String,
    year:String,
    category:String,
    awardMedalLevel:String,
    numberOfAwardsMedals:String,
    details:String
})

module.exports = mongoose.model('file_6571689faca66988677fb459',Form)