const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    iqac_id:String,
    serialNumber:Number,
    workshopTitle:String,
    workshopDate:Number,
    resourcePerson:String,
    targetAudience:String,
    participantCount:Number,
    workshopObjectives:String,
    workshopContent:String,
    workshopMethodology:String,
    evaluationMethods:String,
    keyFindingsOutcomes:String,
    actionPlan:String,
    attachments:String


});

module.exports = mongoose.model('file_657183c261bb8cdadc44693b',Form) 