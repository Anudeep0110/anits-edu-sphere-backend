//Form Name: Industrial visits organized
const mongoose = require('mongoose')

const Form = new mongoose.Schema({
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
});

module.exports = mongoose.model('file_656efeb5569fa41d072f7679',Form)