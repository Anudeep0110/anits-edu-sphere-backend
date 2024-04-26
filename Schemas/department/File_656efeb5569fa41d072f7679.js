//Form Name: Industrial visits organized
const mongoose = require('mongoose')
let File_656efeb5569fa41d072f7679;

if (mongoose.models.file_656efeb5569fa41d072f7679) {
    File_656efeb5569fa41d072f7679 = mongoose.model('file_656efeb5569fa41d072f7679')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    academicYear:String,
    branch:String,
    semester:String,
    dateOfVisit:String,
    companyName:String,
    location:String,
    industry:String,
    objectiveOfVisit:String,
    numberOfParticipants:String,
    facultyInCharge:String,
    accompanyingStaff:String,
    activitiesConducted:String,
    keyLearnings:String,
    feedback:String,
})
File_656efeb5569fa41d072f7679 = mongoose.model('file_656efeb5569fa41d072f7679',Form)
module.exports = File_656efeb5569fa41d072f7679