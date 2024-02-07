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

module.exports = mongoose.model('forms',Form)