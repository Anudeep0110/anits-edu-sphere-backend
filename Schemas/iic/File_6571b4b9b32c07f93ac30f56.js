const mongoose = require('mongoose')
//formname:Formal Collaboration Linkages (MoUs) with Repute Industry Associations to promote and support Innovation and Startup Agenda in campus 
const Form = new mongoose.Schema({
    iic_id:String,
    CollaborationID:String,
    AssociationName:String,
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

module.exports = mongoose.model('file_6571b4b9b32c07f93ac30f56',Form)
