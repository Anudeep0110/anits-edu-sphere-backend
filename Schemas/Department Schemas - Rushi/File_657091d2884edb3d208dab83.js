//Form Name: Development activity - Product Development
const mongoose = require('mongoose')

const Form = new mongoose.Schema({
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

module.exports = mongoose.model('forms',Form)