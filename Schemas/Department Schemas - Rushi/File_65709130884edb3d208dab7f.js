//Form name:Industry-collaborated laboratories established 
const mongoose = require('mongoose')

const Form = new mongoose.Schema({
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

module.exports = mongoose.model('forms',Form)