const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    iqac_id:String,
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