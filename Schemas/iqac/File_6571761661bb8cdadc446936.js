const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    initiativeTitle:String,
    targetGroups:String,
    methodologyActivities:String,
    resourcesUtilized:String,
    outcomesImpacts:String,
    challengesFaced:String,
    recommendationsForImprovement:String,
    evidenceOfImplementation:String,
    followUpActionTaken:String

});

module.exports = mongoose.model('file_6571761661bb8cdadc446936',Form) 