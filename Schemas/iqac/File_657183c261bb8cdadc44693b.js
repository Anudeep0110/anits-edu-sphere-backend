const mongoose = require('mongoose')
let File_657183c261bb8cdadc44693b;

if (mongoose.models.file_657183c261bb8cdadc44693b) {
    File_657183c261bb8cdadc44693b = mongoose.model('file_657183c261bb8cdadc44693b')
} else {
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


})
File_657183c261bb8cdadc44693b = mongoose.model('file_657183c261bb8cdadc44693b',Form) 
}
module.exports = File_657183c261bb8cdadc44693b