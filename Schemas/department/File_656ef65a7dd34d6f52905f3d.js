const mongoose = require('mongoose')

//Form name : Percentage of new courses introduced out of the total number of courses
const Form = new mongoose.Schema({
    academicYear:String,
    totalNumberOfCourses:String,
    numberOfNewCoursesIntroduced:String,
    percentageOfNewCourses:String,
});

module.exports = mongoose.model('file_656ef65a7dd34d6f52905f3d',Form)