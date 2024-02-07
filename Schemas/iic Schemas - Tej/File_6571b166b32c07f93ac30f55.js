const mongoose = require('mongoose')
//formname: Collaboration Linkages (MoUs) with Incubation units for promoting innovation and startup
const Form = new mongoose.Schema({
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
});

module.exports = mongoose.model('file_6571b166b32c07f93ac30f55',Form)
