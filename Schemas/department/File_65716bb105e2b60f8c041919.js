const mongoose = require('mongoose')    // Functional MoUs

const Form = new mongoose.Schema({
    mouTitle:String,
    activityName:String,
    departmentCollege:String,
    partnerInstitution:String, 
    mouDate:String, 
    mouDuration:Number, 
    areasOfCollaboration:String, 
    collaborationActivities:String, 
    intellectualPropertyOwnership:String,
    mouReviewAndRenewal:String,
    mouStatus:String,
    outcomesAndAchievements:String

})

module.exports = mongoose.model('file_65716bb105e2b60f8c041919',Form)