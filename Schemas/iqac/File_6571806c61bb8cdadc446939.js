const mongoose = require('mongoose')
let File_6571806c61bb8cdadc446939;

if (mongoose.models.file_6571806c61bb8cdadc446939) {
    File_6571806c61bb8cdadc446939 = mongoose.model('file_6571806c61bb8cdadc446939')
} else {
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

})
File_6571806c61bb8cdadc446939 = mongoose.model('file_6571806c61bb8cdadc446939',Form) 
}
module.exports = File_6571806c61bb8cdadc446939