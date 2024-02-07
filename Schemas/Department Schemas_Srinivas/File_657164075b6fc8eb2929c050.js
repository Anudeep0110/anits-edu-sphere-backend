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
    totalFundingAmount:Number, 
    publicationOutcomes:String
})

module.exports = mongoose.model('forms',Form)