const mongoose = require('mongoose')

//Form name : Percentage of new courses introduced out of the total number of courses
const Form = new mongoose.Schema({
    dept_id:String,
    investigatorName:String,
    fundingAgency:String,
    grantType:String,
    investigatorDepartment:String,
    yearOfAward:String,
    fundsProvided:String,
    projectDuration:String,
    projectStatus:String,
});

module.exports = mongoose.model('file_656ec6d4d60332f945d29f8b',Form)