const mongoose = require('mongoose')
let File_6571b5ceb32c07f93ac30f57;
if (mongoose.models.file_6571b5ceb32c07f93ac30f57) {
    File_6571b5ceb32c07f93ac30f57= mongoose.model('file_6571b5ceb32c07f93ac30f57')
} else {
//formname: Formal Collaboration Linkages (MoUs) with National Knowledge Agencies to promote and support Innovation and Startup Agenda in campus
const Form = new mongoose.Schema({
    iic_id:String,
    CollaborationID:String,
    AgencyName:String,
    MoUorAgreementType:String,
    Date:String,
    Purpose:String,
    ContactPersonName:String,
    ContactPersonEmail:String,
    ContactPersonPhone:String,
    Benefits:String,
    InnovationSupport:String,
    StartupPromotion:String,   
})
File_6571b5ceb32c07f93ac30f57 = mongoose.model('file_6571b5ceb32c07f93ac30f57',Form)
}
module.exports = File_6571b5ceb32c07f93ac30f57