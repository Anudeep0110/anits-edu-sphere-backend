const mongoose = require('mongoose')
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
});

module.exports = mongoose.model('file_65716a7605e2b60f8c041918',Form)