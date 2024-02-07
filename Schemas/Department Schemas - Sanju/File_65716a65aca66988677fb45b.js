const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    activityName:String,
    targetAudience:String,
    activityDate:String,
    durationHours:Number,
    resourcePersons:String,
    methodologyDeliveryMode:String,
    keyLanguageCommunicationSkillsCovered:String,
    resourceMaterials:String,
    outcomesEvaluation:String,
    additionalInformation:String
})

module.exports = mongoose.model('file_65716a65aca66988677fb45b',Form)