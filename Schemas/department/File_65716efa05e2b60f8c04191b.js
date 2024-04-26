const mongoose = require('mongoose')    // Students graduated in stipulated period of study
let File_65716efa05e2b60f8c04191b;

if (mongoose.models.file_65716efa05e2b60f8c04191b) {
    File_65716efa05e2b60f8c04191b = mongoose.model('file_65716efa05e2b60f8c04191b')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    studentName:String,
    registrationNumber:String,
    departmentProgram:String, 
    degreeAwarded:String, 
    specialization:String, 
    yearOfGraduation:String, 
    semesterOfGraduation:String, 
    cgpa:String,
    backlogs:String,
    timeTakenToGraduate:String,
    internshipProjectExperience:String,
    jobPlacementStatus:String,
    employerHigherEducationInstitution:String, 
    awardsDistinctions:String

})
File_65716efa05e2b60f8c04191b = mongoose.model('file_65716efa05e2b60f8c04191b',Form)
}
module.exports = File_65716efa05e2b60f8c04191b