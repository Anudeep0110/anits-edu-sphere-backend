//Form Name: Guest lectures organized

const mongoose = require('mongoose')

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
});

module.exports = mongoose.model('file_657090a3884edb3d208dab7d',Form)