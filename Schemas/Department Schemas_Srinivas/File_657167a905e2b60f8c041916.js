const mongoose = require('mongoose')    // Teachers recognised as research guides

const Form = new mongoose.Schema({
    teacherName:String,
    department:String,
    designation:String,
    recognitionDate:String, 
    recognitionType:String, 
    areaOfExpertise:Number, 
    noOfGuidedStudentsMS:Number, 
    noOfGuidedStudentsPhD:Number, 
    researchPublications:String,
    researchAwardsGrants:String, 
    impactOfResearchGuidance:String
})

module.exports = mongoose.model('forms',Form)