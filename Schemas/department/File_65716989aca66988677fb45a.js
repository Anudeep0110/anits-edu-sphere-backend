const mongoose = require('mongoose')
let File_65716989aca66988677fb45a;

if (mongoose.models.file_65716989aca66988677fb45a) {
    File_65716989aca66988677fb45a = mongoose.model('file_65716989aca66988677fb45a')
} else {
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
File_65716989aca66988677fb45a = mongoose.model('file_65716989aca66988677fb45a',Form)
}
module.exports = File_65716989aca66988677fb45a