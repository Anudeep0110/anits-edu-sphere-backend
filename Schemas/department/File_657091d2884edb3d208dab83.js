//Form Name: Development activity - Product Development
const mongoose = require('mongoose')

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
});

module.exports = mongoose.model('file_657091d2884edb3d208dab83',Form)