//Form Name: Development activity - Product Development
const mongoose = require('mongoose')

let File_657091d2884edb3d208dab83;

if (mongoose.models.file_657091d2884edb3d208dab83) {
    File_657091d2884edb3d208dab83 = mongoose.model('file_657091d2884edb3d208dab83')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    departmentName:String,
    productName:String,
    projectLead:String,
    facultyAdvisor:String,
    teamMembers:String,
    projectStartDate:String,
    projectEndDate:String,
    projectDescription:String,
    productSpecifications:String,
    targetUserGroup:String,
    projectBudget:String,
    fundingSources:String,
    challengesFaced:String, 
    risksAndMitigation:String,
    intellectualPropertyGenerated:String,
    futureWork:String,
    disseminationPlan:String,
    resourcesAndReference:String,
})
File_657091d2884edb3d208dab83 = mongoose.model('file_657091d2884edb3d208dab83',Form)
}
module.exports = File_657091d2884edb3d208dab83