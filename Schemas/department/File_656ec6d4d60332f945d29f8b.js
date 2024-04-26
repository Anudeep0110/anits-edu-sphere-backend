const mongoose = require('mongoose')
let File_656ec6d4d60332f945d29f8b;


if (mongoose.models.file_656ec6d4d60332f945d29f8b) {
    File_656ec6d4d60332f945d29f8b = mongoose.model('file_656ec6d4d60332f945d29f8b')
} else {
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
})
File_656ec6d4d60332f945d29f8b = mongoose.model('file_656ec6d4d60332f945d29f8b',Form)
}
module.exports = File_656ec6d4d60332f945d29f8b