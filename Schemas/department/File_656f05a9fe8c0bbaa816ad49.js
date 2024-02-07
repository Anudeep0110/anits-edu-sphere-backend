const mongoose = require('mongoose')    // Department activity working model

const Form = new mongoose.Schema({
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

module.exports = mongoose.model('file_656f05a9fe8c0bbaa816ad49',Form)