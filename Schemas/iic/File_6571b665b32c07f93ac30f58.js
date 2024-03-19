const mongoose = require('mongoose')
//formname:Formal Collaboration Linkages (MoUs) with Ecosystem Enablers (Govt agencies) to promote and support Innovation and Startup Agenda in campus
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
});

module.exports = mongoose.model('file_6571b665b32c07f93ac30f58',Form)