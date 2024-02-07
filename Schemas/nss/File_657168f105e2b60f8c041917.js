const mongoose = require('mongoose')
//formname:Activities on Entrepreneurship
const Form = new mongoose.Schema({
    programTitle:String,
    departmentOrganizer:String,
    targetAudience:String,
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
});

module.exports = mongoose.model('file_657168f105e2b60f8c041917',Form)