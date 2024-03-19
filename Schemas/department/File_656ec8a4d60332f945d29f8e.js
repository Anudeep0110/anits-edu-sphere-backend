const mongoose = require('mongoose')

//Form name : Percentage of new courses introduced out of the total number of courses
const Form = new mongoose.Schema({
    dept_id:String,
    departmentName:String,
    trainingType:String,
    organizationDetails:String,
    participantNames:String,
    trainingYear:String,
    trainingDuration:String,
    activityNature:String,
    documentLink:String,
});

module.exports = mongoose.model('file_656ec8a4d60332f945d29f8e',Form)