const mongoose = require('mongoose')
let File_65716a7605e2b60f8c041918;
if (mongoose.models.file_65716a7605e2b60f8c041918) {
    File_65716a7605e2b60f8c041918 = mongoose.model('file_65716a7605e2b60f8c041918')
} else {
//formname:Activities on Entrepreneurship
const Form = new mongoose.Schema({
    nss_id:String,
    programTitle:String,
    departmentOrganizer:String,
    targetAudience:String,
    programDates:String,
    programActivityEvent:String,
    programLocation:String,
    numberOfParticipants:String,
    programObjectives:String,   
    programDescription:String,
    programResources:String,
    partnerOrganizations:String,
    programOutcomesImpact:String,
    additionalInformation:String
})
File_65716a7605e2b60f8c041918 = mongoose.model('file_65716a7605e2b60f8c041918',Form)
}
module.exports = File_65716a7605e2b60f8c041918