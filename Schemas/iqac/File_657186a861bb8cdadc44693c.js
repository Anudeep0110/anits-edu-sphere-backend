const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    iqac_id:String,
    rankingCategory:String,
    rankingYear:String,
    collegeRank:Number,
    overallScore:Number,
    rankingParameters:String,
    rankingSourceUrl:String,
    rankingRemarks:String


});

module.exports = mongoose.model('file_65718a5761bb8cdadc44693d',Form) 