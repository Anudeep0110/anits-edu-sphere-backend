const mongoose = require('mongoose')
//formname:Field visit for problem identification
const Form = new mongoose.Schema({
    VisitID:String,
Date:String,
Location:String,
Purpose:String,
FacultyLead:String,
StudentParticipants:String,
IdentifiedProblems:String,
Observations:String,
Recommendations:String,
});

module.exports = mongoose.model('file_6571b8e7b32c07f93ac30f5d',Form)