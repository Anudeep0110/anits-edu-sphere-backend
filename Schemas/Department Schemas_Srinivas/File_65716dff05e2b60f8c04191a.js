const mongoose = require('mongoose')    // Functional collaboration with premier institutions

const Form = new mongoose.Schema({
    partnerInstitution:String,
    departmentCollege:String,
    collaborationStartDate:String, 
    collaborationType:String, 
    collaborationActivities:Number, 
    collaborationDuration:String, 
    collaborationAgreement:String, 
    keyContactPerson:String,
    achievementsOutcomesToDate:String,
    challengesObstacles:String,
    futurePlansNextSteps:String

})

module.exports = mongoose.model('forms',Form)