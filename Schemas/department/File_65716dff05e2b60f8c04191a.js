const mongoose = require('mongoose')    // Functional collaboration with premier institutions
let File_65716dff05e2b60f8c04191a;

if (mongoose.models.file_65716dff05e2b60f8c04191a) {
    File_65716dff05e2b60f8c04191a = mongoose.model('file_65716dff05e2b60f8c04191a')
} else {
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
File_65716dff05e2b60f8c04191a = mongoose.model('file_65716dff05e2b60f8c04191a',Form)
}
module.exports = File_65716dff05e2b60f8c04191a