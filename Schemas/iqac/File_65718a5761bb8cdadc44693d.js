const mongoose = require('mongoose')
let File_65718a5761bb8cdadc44693d;

if (mongoose.models.file_65718a5761bb8cdadc44693d) {
    File_65718a5761bb8cdadc44693d = mongoose.model('file_65718a5761bb8cdadc44693d')
} else {
const Form = new mongoose.Schema({
    iqac_id:String,
    serialNumber:String,
    initiativeDate:String,
    institutionName:String,
    initiativeType:String,
    initiativeTitle:String,
    targetParticipants:String,
    outcomesImpact:String,
    resourcesUtilized:String,
    sustainabilityPlan:String,
    documentsLinks:String



})
File_65718a5761bb8cdadc44693d = mongoose.model('file_657186a861bb8cdadc44693c',Form) 
}
module.exports = File_65718a5761bb8cdadc44693d