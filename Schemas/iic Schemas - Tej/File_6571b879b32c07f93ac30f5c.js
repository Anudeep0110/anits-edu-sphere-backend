const mongoose = require('mongoose')
//formname:Inter/Intra Institutional Idea Competition/Challenge/Hackathon
const Form = new mongoose.Schema({
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
});

module.exports = mongoose.model('forms',Form)