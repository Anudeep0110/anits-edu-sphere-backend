const mongoose = require('mongoose')

let File_65716685aca66988677fb457;

if (mongoose.models.file_65716685aca66988677fb457) {
    File_65716685aca66988677fb457 = mongoose.model('file_65716685aca66988677fb457')
} else {
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
File_65716685aca66988677fb457 = mongoose.model('file_65716685aca66988677fb457',Form)
}
module.exports = File_65716685aca66988677fb457