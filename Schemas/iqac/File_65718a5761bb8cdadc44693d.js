const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    iqac_id:String,
    serialNumber:String,
    initiativeDate:String,
    institutionName:String,
    initiativeType:String,
    initiativeTitle:String,
    targetParticipants:String,
    outcomesImpact:String,
    resourcesUtilized:String,
    sustainabilityPlan:String,
    documentsLinks:String



});

module.exports = mongoose.model('file_657186a861bb8cdadc44693c',Form) 