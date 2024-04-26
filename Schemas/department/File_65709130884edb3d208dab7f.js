//Form name:Industry-collaborated laboratories established 
const mongoose = require('mongoose')

let File_65709130884edb3d208dab7f;

if (mongoose.models.file_65709130884edb3d208dab7f) {
    File_65709130884edb3d208dab7f = mongoose.model('file_65709130884edb3d208dab7f')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    laboratoryName:String,
    collaboratingIndustry:String,
    collaborationType:String,
    establishmentDate:String,
    laboratoryObjectives:String,
    laboratoryFacilities:String,
    researchFocus:String,
    laboratoryInCharge:String,
    contactInformation:String,
    industryPartnerName:String,
    industrySector:String,
})
File_65709130884edb3d208dab7f = mongoose.model('file_65709130884edb3d208dab7f',Form)
}
module.exports = File_65709130884edb3d208dab7f