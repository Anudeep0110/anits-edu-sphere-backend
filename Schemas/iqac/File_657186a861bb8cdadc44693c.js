const mongoose = require('mongoose')
let File_657186a861bb8cdadc44693c;
if (mongoose.models.file_657186a861bb8cdadc44693c) {
    File_657186a861bb8cdadc44693c = mongoose.model('file_657186a861bb8cdadc44693c')
} else {
const Form = new mongoose.Schema({
    iqac_id:String,
    rankingCategory:String,
    rankingYear:String,
    collegeRank:Number,
    overallScore:Number,
    rankingParameters:String,
    rankingSourceUrl:String,
    rankingRemarks:String


})
File_657186a861bb8cdadc44693c = mongoose.model('file_65718a5761bb8cdadc44693d',Form) 
}
module.exports = File_657186a861bb8cdadc44693c