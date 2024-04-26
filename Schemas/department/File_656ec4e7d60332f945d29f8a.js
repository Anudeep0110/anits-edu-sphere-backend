const mongoose = require('mongoose')
let File_656ec4e7d60332f945d29f8a;

if (mongoose.models.file_656ec4e7d60332f945d29f8a) {
    File_656ec4e7d60332f945d29f8a = mongoose.model('file_656ec4e7d60332f945d29f8a')
} else {
//Form name : Percentage of new courses introduced out of the total number of courses
const Form = new mongoose.Schema({
    dept_id:String,
    workshopSeminarConferenceName:String,
    resourcePersonDetails:String,
    eventType:String,
    nationalInternational:String,
    durationFrom:String,
    durationTo:String,
    participantsCount:String,
    remarks:String
})
File_656ec4e7d60332f945d29f8a = mongoose.model('file_656ec4e7d60332f945d29f8a',Form)
}
module.exports = File_656ec4e7d60332f945d29f8a