const mongoose = require('mongoose')
let File_6571689faca66988677fb459;

if (mongoose.models.file_6571689faca66988677fb459) {
    File_6571689faca66988677fb459 = mongoose.model('file_6571689faca66988677fb459')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    departmentName:String,
    year:String,
    category:String,
    awardMedalLevel:String,
    numberOfAwardsMedals:String,
    details:String
})
File_6571689faca66988677fb459 = mongoose.model('file_6571689faca66988677fb459',Form)
}
module.exports = File_6571689faca66988677fb459