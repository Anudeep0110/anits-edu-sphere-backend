const mongoose = require('mongoose')    // Students graduated in stipulated period of study

const Form = new mongoose.Schema({
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

module.exports = mongoose.model('file_65716efa05e2b60f8c04191b',Form)