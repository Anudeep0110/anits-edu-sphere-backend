const mongoose = require('mongoose')    // Functional collaboration with premier institutions

const Form = new mongoose.Schema({
    dept_id:String,
    partnerInstitution:String,
    departmentCollege:String,
    collaborationStartDate:String, 
    collaborationType:String, 
    collaborationActivities:String, 
    collaborationDuration:String, 
    collaborationAgreement:String, 
    keyContactPerson:String,
    achievementsOutcomesToDate:String,
    challengesObstacles:String,
    futurePlansNextSteps:String

})

module.exports = mongoose.model('file_65716dff05e2b60f8c04191a',Form)