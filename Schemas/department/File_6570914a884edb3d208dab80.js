//Form name: Events organized under Professional societies/chapters 
const mongoose = require('mongoose')

let File_6570914a884edb3d208dab80;

if (mongoose.models.file_6570914a884edb3d208dab80) {
    File_6570914a884edb3d208dab80 = mongoose.model('file_6570914a884edb3d208dab80')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
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
})
File_6570914a884edb3d208dab80 = mongoose.model('file_6570914a884edb3d208dab80',Form)
}
module.exports = File_6570914a884edb3d208dab80