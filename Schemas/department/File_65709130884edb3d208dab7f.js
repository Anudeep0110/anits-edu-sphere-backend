//Form name:Industry-collaborated laboratories established 
const mongoose = require('mongoose')

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
});

module.exports = mongoose.model('file_65709130884edb3d208dab7f',Form)