const mongoose = require('mongoose')

let File_656ec79fd60332f945d29f8d;

if (mongoose.models.file_656ec79fd60332f945d29f8d) {
    File_656ec79fd60332f945d29f8d = mongoose.model('file_656ec79fd60332f945d29f8d')
} else {
//Form name : Percentage of new courses introduced out of the total number of courses
const Form = new mongoose.Schema({
    dept_id:String,
    departmentName:String,
    organizationDetails:String,
    participantNames:String,
    trainingYear:String,
    trainingDuration:String,
    activityNature:String,
    documentLink:String,
})
File_656ec79fd60332f945d29f8d = mongoose.model('file_656ec79fd60332f945d29f8d',Form)
}
module.exports = File_656ec79fd60332f945d29f8d