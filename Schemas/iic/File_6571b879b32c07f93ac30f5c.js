const mongoose = require('mongoose')
let File_6571b879b32c07f93ac30f5c;

if (mongoose.models.file_6571b879b32c07f93ac30f5c) {
    File_6571b879b32c07f93ac30f5c = mongoose.model('file_6571b879b32c07f93ac30f5c')
} else {
//formname:Inter/Intra Institutional Idea Competition/Challenge/Hackathon
const Form = new mongoose.Schema({
    iic_id:String,
    CompetitionID:String,
    EventName:String,
    Date:String,
    Type:String,
    Organizer:String,
    Location:String,
    ParticipantsCount:String,
    WiningIdea:String,
    WinnerNames:String,
    Description:String,
})
File_6571b879b32c07f93ac30f5c = mongoose.model('file_6571b879b32c07f93ac30f5c',Form)
}
module.exports = File_6571b879b32c07f93ac30f5c