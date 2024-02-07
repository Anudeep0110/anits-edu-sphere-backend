//Form name: Events organized under Professional societies/chapters 
const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    eventTitle:String,
    organizingChapter:String,
    eventCategory:String,
    eventDateTime:String,
    eventVenue:String,
    eventDescription:String,
    eventObjectives:String,
    targetAudience:String,
    eventSpeakers:String,
    eventResourcePersons:String,
    numberOfParticipants:String,
    eventRegistration:String,
    eventFeedback:String, 
});

module.exports = mongoose.model('file_6570914a884edb3d208dab80',Form)