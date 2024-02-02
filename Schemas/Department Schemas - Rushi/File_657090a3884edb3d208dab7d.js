//Form Name: Guest lectures organized

const mongoose = require('mongoose')

const Form = new mongoose.Schema({
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

module.exports = mongoose.model('forms',Form)