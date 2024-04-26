const mongoose = require('mongoose')
let File_6571b722b32c07f93ac30f59;

if (mongoose.models.file_6571b722b32c07f93ac30f59) {
    File_6571b722b32c07f93ac30f59 = mongoose.model('file_6571b722b32c07f93ac30f59')
} else {
//formname:MHRD Ratings
const Form = new mongoose.Schema({
    iic_id:String,
    CollegeID:String,
CollegeName:String,
Year:String,
OverallRating:String,
TeachingRating:String,
ResearchRating:String,
InfrastructureRating:String,
PlacementsRating:String,
AccreditationRating:String,
NIRFRanking:String,
Comments:String,
})
File_6571b722b32c07f93ac30f59 = mongoose.model('file_6571b722b32c07f93ac30f59',Form)
}
module.exports = File_6571b722b32c07f93ac30f59