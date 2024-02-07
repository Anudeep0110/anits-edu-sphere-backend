const mongoose = require('mongoose')    // Extension programs conducted

const Form = new mongoose.Schema({
    programTitle:String,
    departmentOrganizer:String,
    targetAudience:Number,
    programDuration:Number, 
    programDates:String, 
    programFee:Number, 
    programObjectives:String, 
    programContentModules:String, 
    instructorsSpeakers:String,
    programDeliveryMethod:String,
    assessmentMethod:String,
    registrationLinkContactInfo:String, 
    programBenefitsOutcomes:String
})

module.exports = mongoose.model('file_657168f105e2b60f8c041917',Form)