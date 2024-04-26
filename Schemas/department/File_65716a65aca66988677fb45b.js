const mongoose = require('mongoose')

let File_65716a65aca66988677fb45b;

if (mongoose.models.file_65716a65aca66988677fb45b) {
    File_65716a65aca66988677fb45b = mongoose.model('file_65716a65aca66988677fb45b')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    activityName:String,
    targetAudience:String,
    activityDate:String,
    durationHours:String,
    resourcePersons:String,
    methodologyDeliveryMode:String,
    keyLanguageCommunicationSkillsCovered:String,
    resourceMaterials:String,
    outcomesEvaluation:String,
    additionalInformation:String
})
File_65716a65aca66988677fb45b = mongoose.model('file_65716a65aca66988677fb45b',Form)
}
module.exports = File_65716a65aca66988677fb45b