const mongoose = require('mongoose')

//Form name : Percentage of new courses introduced out of the total number of courses
const Form = new mongoose.Schema({
    dept_id:String,
    workshopSeminarConferenceName:String,
    resourcePersonDetails:String,
    eventType:String,
    nationalInternational:String,
    durationFrom:String,
    durationTo:String,
    participantsCount:String,
    remarks:String
});

module.exports = mongoose.model('file_656ec4e7d60332f945d29f8a',Form)