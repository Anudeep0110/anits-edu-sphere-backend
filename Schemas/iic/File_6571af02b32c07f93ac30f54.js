const mongoose = require('mongoose')
let File_6571af02b32c07f93ac30f54;

if (mongoose.models.file_6571af02b32c07f93ac30f54) {
    File_6571af02b32c07f93ac30f54 = mongoose.model('file_6571af02b32c07f93ac30f54')
} else {
//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    iic_id:String,
    CollaborationID:String,
    InstitutionName:String,
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
File_6571af02b32c07f93ac30f54 = mongoose.model('file_6571af02b32c07f93ac30f54',Form)
}
module.exports = File_6571af02b32c07f93ac30f54
