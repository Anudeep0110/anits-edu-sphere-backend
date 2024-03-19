const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    dept_id:String,
    activityName:String,
    targetAudience:String,
    activityDate:String,
    durationHours:String,
    resourcePersons:String,
    methodologyDeliveryMode:String,
    keySoftSkillsCovered:String,
    outcomesEvaluation:String,
    resourceMaterials:String
})

module.exports = mongoose.model('file_65716989aca66988677fb45a',Form)