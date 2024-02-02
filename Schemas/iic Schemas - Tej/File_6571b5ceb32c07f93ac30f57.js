const mongoose = require('mongoose')
//formname: Formal Collaboration Linkages (MoUs) with National Knowledge Agencies to promote and support Innovation and Startup Agenda in campus
const Form = new mongoose.Schema({
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
});

module.exports = mongoose.model('forms',Form)