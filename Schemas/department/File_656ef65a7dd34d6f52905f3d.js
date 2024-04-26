const mongoose = require('mongoose')
let File_656ef65a7dd34d6f52905f3d;

if (mongoose.models.file_656ef65a7dd34d6f52905f3d) {
    File_656ef65a7dd34d6f52905f3d = mongoose.model('file_656ef65a7dd34d6f52905f3d')
} else {
//Form name : Percentage of new courses introduced out of the total number of courses
const Form = new mongoose.Schema({
    dept_id:String,
    academicYear:String,
    totalNumberOfCourses:String,
    numberOfNewCoursesIntroduced:String,
    percentageOfNewCourses:String,
})
File_656ef65a7dd34d6f52905f3d = mongoose.model('file_656ef65a7dd34d6f52905f3d',Form)
}
module.exports = File_656ef65a7dd34d6f52905f3d