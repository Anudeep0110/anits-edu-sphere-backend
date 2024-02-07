const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    departmentName:String,
    year:Number,
    category:String,
    awardMedalLevel:String,
    numberOfAwardsMedals:Number,
    details:String
})

module.exports = mongoose.model('file_6571689faca66988677fb459',Form)