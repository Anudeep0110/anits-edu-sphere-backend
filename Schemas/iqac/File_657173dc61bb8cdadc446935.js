const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    iqac_id:String,
    meetingDate:String,
    meetingTime:Number,
    meetingLocation:String,
    attendees:String,
    agendaItems:String,
    actionItems:String,
    minutes:Number,
    nextMeetingDate:String,
    nextMeetingTime:Number

});

module.exports = mongoose.model('file_657173dc61bb8cdadc446935',Form) 