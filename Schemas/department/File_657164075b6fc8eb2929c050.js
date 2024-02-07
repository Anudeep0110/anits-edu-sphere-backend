const mongoose = require('mongoose')  // Teachers receiving national/ international fellowship/financial support

const Form = new mongoose.Schema({
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

module.exports = mongoose.model('file_657164075b6fc8eb2929c050',Form)