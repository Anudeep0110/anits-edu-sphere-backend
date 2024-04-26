const mongoose = require('mongoose')
let File_656b264f988da5fb17a661f2;

if (mongoose.models.file_656b264f988da5fb17a661f2) {
    File_656b264f988da5fb17a661f2 = mongoose.model('file_656b264f988da5fb17a661f2')
} else {
//Form name : Percentage of new courses introduced out of the total number of courses
const Form = new mongoose.Schema({
    dept_id:String,
    nameOfTheSpeakerAndDesignation:String,
    OrganizationName:String,
    topicName:String,
    DateOfTheLecture:String,
    ParticipantsCount:String,
    remarks:String
})
File_656b264f988da5fb17a661f2 = mongoose.model('file_656b264f988da5fb17a661f2',Form)
}
module.exports = File_656b264f988da5fb17a661f2