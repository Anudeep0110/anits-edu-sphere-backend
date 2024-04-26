const mongoose = require('mongoose')
let File_6571b8e7b32c07f93ac30f5d;
if (mongoose.models.file_6571b8e7b32c07f93ac30f5d) {
    File_6571b8e7b32c07f93ac30f5d = mongoose.model('file_6571b8e7b32c07f93ac30f5d')
} else {
//formname:Field visit for problem identification
const Form = new mongoose.Schema({
    iic_id:String,
    VisitID:String,
Date:String,
Location:String,
Purpose:String,
FacultyLead:String,
StudentParticipants:String,
IdentifiedProblems:String,
Observations:String,
Recommendations:String,
})
File_6571b8e7b32c07f93ac30f5d = mongoose.model('file_6571b8e7b32c07f93ac30f5d',Form)
}
module.exports = File_6571b8e7b32c07f93ac30f5d