const mongoose = require('mongoose')
let File_6571761661bb8cdadc446936;

if (mongoose.models.file_6571761661bb8cdadc446936) {
    File_6571761661bb8cdadc446936 = mongoose.model('file_6571761661bb8cdadc446936')
} else {
const Form = new mongoose.Schema({
    iqac_id:String,
    initiativeTitle:String,
    targetGroups:String,
    methodologyActivities:String,
    resourcesUtilized:String,
    outcomesImpacts:String,
    challengesFaced:String,
    recommendationsForImprovement:String,
    evidenceOfImplementation:String,
    followUpActionTaken:String

})
File_6571761661bb8cdadc446936 = mongoose.model('file_6571761661bb8cdadc446936',Form) 
}
module.exports = File_6571761661bb8cdadc446936