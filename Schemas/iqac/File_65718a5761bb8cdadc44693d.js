const mongoose = require('mongoose')

const Form = new mongoose.Schema({
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