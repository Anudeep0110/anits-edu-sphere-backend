const mongoose = require('mongoose')    // Department activity working model

let File_656f05a9fe8c0bbaa816ad49;

if (mongoose.models.file_656f05a9fe8c0bbaa816ad49) {
    File_656f05a9fe8c0bbaa816ad49 = mongoose.model('file_656f05a9fe8c0bbaa816ad49')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    activityId:String,
    activityName:String,
    activityDescription:String,
    activityType:String, 
    activityObjectives:String, 
    activitySteps:String, 
    activityAssessment:String, 
    activityResources:String, 
    activityCreator:String
})
File_656f05a9fe8c0bbaa816ad49 = mongoose.model('file_656f05a9fe8c0bbaa816ad49',Form)
}
module.exports = File_656f05a9fe8c0bbaa816ad49