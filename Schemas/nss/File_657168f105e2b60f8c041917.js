const mongoose = require('mongoose')
let File_657168f105e2b60f8c041917;

if (mongoose.models.file_657168f105e2b60f8c041917) {
    File_657168f105e2b60f8c041917 = mongoose.model('file_657168f105e2b60f8c041917')
} else {
//formname:Activities on Entrepreneurship
const Form = new mongoose.Schema({
    nss_id:String,
    programTitle:String,
    departmentOrganizer:String,
    targetAudience:String,
    programDuration:String,
    programDates:String,
    programFee:String,
    programObjectives:String,
    programContentModules:String,
    instructorsSpeakers:String,   
    programDeliveryMethod:String,
    assessmentMethod:String,
    registrationLinkContactInfo:String,
    programBenefitsOutcomes:String
})
File_657168f105e2b60f8c041917 = mongoose.model('file_657168f105e2b60f8c041917',Form)
}
module.exports = File_657168f105e2b60f8c041917