const mongoose = require('mongoose')

const Login = new mongoose.Schema({
    conferenceTitle:String,
    conferenceDates:String,
    conferenceVenue:String,
    organizingBody:String,
    targetAudience:String,
    numberOfParticipants:Number,
    mainThemes:String,
    speakersAndTopics:String,
    outcomesAndRecommendations:String,
    supportingDocumentsn:String,
    remarksAndNotes:String
    


});

module.exports = mongoose.model('file_6571806c61bb8cdadc446939',Form) 