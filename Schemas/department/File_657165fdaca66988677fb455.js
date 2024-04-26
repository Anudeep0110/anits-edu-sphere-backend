const mongoose = require('mongoose')
let File_657165fdaca66988677fb455;

if (mongoose.models.file_657165fdaca66988677fb455) {
    File_657165fdaca66988677fb455 = mongoose.model('file_657165fdaca66988677fb455')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
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
File_657165fdaca66988677fb455 = mongoose.model('file_657165fdaca66988677fb455',Form)
}
module.exports = File_657165fdaca66988677fb455