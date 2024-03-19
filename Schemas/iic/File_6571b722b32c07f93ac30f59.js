const mongoose = require('mongoose')
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
});

module.exports = mongoose.model('file_6571b722b32c07f93ac30f59',Form)