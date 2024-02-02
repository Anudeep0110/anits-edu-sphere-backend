const mongoose = require('mongoose')
//formname:MHRD Ratings
const Form = new mongoose.Schema({
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

module.exports = mongoose.model('forms',Form)