const mongoose = require('mongoose')

const Login = new mongoose.Schema({
    serialNumber:Number,
    workshopTitle:String,
    workshopDate:Number,
    resourcePerson:Text,
    targetAudience:Text,
    participantCount:Number,
    workshopObjectives:Text,
    workshopContent:Text,
    workshopMethodology:Text,
    evaluationMethods:Text,
    keyFindingsOutcomes:Text,
    actionPlan:Text,
    attachments:Text


});

module.exports = mongoose.model('file_657183c261bb8cdadc44693b',Form) 