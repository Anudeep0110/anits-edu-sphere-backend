const mongoose = require('mongoose')    // Teachers recognised as research guides

const Form = new mongoose.Schema({
    dept_id:String,
    teacherName:String,
    department:String,
    designation:String,
    recognitionDate:String, 
    recognitionType:String, 
    areaOfExpertise:String, 
    noOfGuidedStudentsMS:String, 
    noOfGuidedStudentsPhD:String, 
    researchPublications:String,
    researchAwardsGrants:String, 
    impactOfResearchGuidance:String
})

module.exports = mongoose.model('file_657167a905e2b60f8c041916',Form)