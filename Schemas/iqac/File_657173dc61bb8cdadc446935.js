const mongoose = require('mongoose')
let File_657173dc61bb8cdadc446935;

if (mongoose.models.file_657173dc61bb8cdadc446935) {
    File_657173dc61bb8cdadc446935 = mongoose.model('file_657173dc61bb8cdadc446935')
} else {
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

})
File_657173dc61bb8cdadc446935 = mongoose.model('file_657173dc61bb8cdadc446935',Form) 
}
module.exports =  File_657173dc61bb8cdadc446935