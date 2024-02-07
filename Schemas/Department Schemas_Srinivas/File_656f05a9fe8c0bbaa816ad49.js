const mongoose = require('mongoose')    // Department activity working model

const Form = new mongoose.Schema({
    activityId:String,
    activityName:String,
    activityDescription:String,
    activityType:String, 
    activityObjectives:String, 
    activitySteps:Number, 
    activityAssessment:String, 
    activityResources:String, 
    activityCreator:String
})

module.exports = mongoose.model('forms',Form)