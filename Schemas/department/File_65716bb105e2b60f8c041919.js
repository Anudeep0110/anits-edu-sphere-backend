const mongoose = require('mongoose')    // Functional MoUs
let File_65716bb105e2b60f8c041919;

if (mongoose.models.file_65716bb105e2b60f8c041919) {
    File_65716bb105e2b60f8c041919 = mongoose.model('file_65716bb105e2b60f8c041919')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    mouTitle:String,
    activityName:String,
    departmentCollege:String,
    partnerInstitution:String, 
    mouDate:String, 
    mouDuration:String, 
    areasOfCollaboration:String, 
    collaborationActivities:String, 
    intellectualPropertyOwnership:String,
    mouReviewAndRenewal:String,
    mouStatus:String,
    outcomesAndAchievements:String

})
File_65716bb105e2b60f8c041919 = mongoose.model('file_65716bb105e2b60f8c041919',Form)
}
module.exports = File_65716bb105e2b60f8c041919