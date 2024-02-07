const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    activityName:String,
    targetAudience:String,
    activityDate:String,
    durationHours:Number,
    resourcePersons:String,
    methodologyDeliveryMode:String,
    keySoftSkillsCovered:String,
    outcomesEvaluation:String,
    resourceMaterials:Number
})

module.exports = mongoose.model('file_65716989aca66988677fb45a',Form)