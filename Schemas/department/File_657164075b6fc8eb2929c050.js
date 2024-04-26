const mongoose = require('mongoose')  // Teachers receiving national/ international fellowship/financial support
let File_657164075b6fc8eb2929c050;

if (mongoose.models.file_657164075b6fc8eb2929c050) {
    File_657164075b6fc8eb2929c050 = mongoose.model('file_657164075b6fc8eb2929c050')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    teacherName:String,
    department:String,
    designation:String,
    fellowshipFinancialSupportTitle:String, 
    grantingInstitution:String, 
    awardDate:String, 
    projectTitle:String, 
    projectDescription:String, 
    totalFundingAmount:String, 
    publicationOutcomes:String
})
File_657164075b6fc8eb2929c050 = mongoose.model('file_657164075b6fc8eb2929c050',Form)
}
module.exports = File_657164075b6fc8eb2929c050