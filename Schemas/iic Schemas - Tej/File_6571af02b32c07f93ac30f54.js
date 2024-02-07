const mongoose = require('mongoose')

//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
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
});

module.exports = mongoose.model('file_6571af02b32c07f93ac30f54',Form)
