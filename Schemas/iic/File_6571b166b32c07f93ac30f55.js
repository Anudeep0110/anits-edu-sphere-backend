const mongoose = require('mongoose')
let File_6571b166b32c07f93ac30f55;

if (mongoose.models.file_6571b166b32c07f93ac30f55) {
    File_6571b166b32c07f93ac30f55 = mongoose.model('file_6571b166b32c07f93ac30f55')
} else {
//formname: Collaboration Linkages (MoUs) with Incubation units for promoting innovation and startup
const Form = new mongoose.Schema({
    iic_id:String,
    CollaborationID:String,
    IncubationUnitName:String,
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
File_6571b166b32c07f93ac30f55 = mongoose.model('file_6571b166b32c07f93ac30f55',Form)
}
module.exports = File_6571b166b32c07f93ac30f55
