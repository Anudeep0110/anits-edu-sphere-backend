const mongoose = require('mongoose')   
 // Teachers recognised as research guides
let File_657167a905e2b60f8c041916;


if (mongoose.models.file_657167a905e2b60f8c041916) {
    File_657167a905e2b60f8c041916 = mongoose.model('file_657167a905e2b60f8c041916')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    teacherName:String,
    department:String,
    designation:String,
    recognitionDate:String, 
    recognitionType:String, 
    areaOfExpertise:String, 
    noOfGuidedStudentsMS:String, 
    noOfGuidedStudentsPhD:String, 
    researchPublications:String,
    researchAwardsGrants:String, 
    impactOfResearchGuidance:String
})
File_657167a905e2b60f8c041916 =  mongoose.model('file_657167a905e2b60f8c041916',Form)
}
module.exports = File_657167a905e2b60f8c041916