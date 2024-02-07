const mongoose = require('mongoose')    // Outreach programs conducted 

const Form = new mongoose.Schema({
    programTitle:String,
    departmentOrganizer:String,
    targetAudience:Number,
    programDates:String, 
    programActivityEvent:String, 
    programLocation:Number, 
    numberOfParticipants:String, 
    programObjectives:String, 
    programDescription:String,
    programResources:String,
    partnerOrganizations:String,
    programOutcomesImpact:String, 
    additionalInformation:String
})

module.exports = mongoose.model('file_65716a7605e2b60f8c041918',Form)