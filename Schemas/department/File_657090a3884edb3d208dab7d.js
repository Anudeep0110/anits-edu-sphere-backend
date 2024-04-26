//Form Name: Guest lectures organized
const mongoose = require('mongoose')

let File_657090a3884edb3d208dab7d;

if (mongoose.models.file_657090a3884edb3d208dab7d) {
    File_657090a3884edb3d208dab7d = mongoose.model('file_657090a3884edb3d208dab7d')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    guestLecturerName:String,
    guestLecturerDesignation:String,
    guestLecturerAffiliation:String,
    topic:String,
    dateAndTime:String,
    venue:String,
    department:String,
    course:String,
    targetAudience:String,
    guestLecturerContactInformation:String,
    feedback:String,
})
File_657090a3884edb3d208dab7d = mongoose.model('file_657090a3884edb3d208dab7d',Form)
}
module.exports = File_657090a3884edb3d208dab7d