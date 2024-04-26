const mongoose = require('mongoose')
let File_65716647aca66988677fb456;

if (mongoose.models.file_65716647aca66988677fb456) {
    File_65716647aca66988677fb456 = mongoose.model('file_65716647aca66988677fb456')
} else {
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
File_65716647aca66988677fb456 = mongoose.model('file_65716647aca66988677fb456',Form)
}
module.exports = File_65716647aca66988677fb456