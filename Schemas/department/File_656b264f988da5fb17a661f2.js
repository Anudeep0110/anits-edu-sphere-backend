const mongoose = require('mongoose')

//Form name : Percentage of new courses introduced out of the total number of courses
const Form = new mongoose.Schema({
    dept_id:String,
    nameOfTheSpeakerAndDesignation:String,
    OrganizationName:String,
    topicName:String,
    DateOfTheLecture:String,
    ParticipantsCount:String,
    remarks:String
});

module.exports = mongoose.model('file_656b264f988da5fb17a661f2',Form)