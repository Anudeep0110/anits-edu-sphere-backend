const mongoose = require('mongoose')
let File_656ec96ad60332f945d29f90;

if (mongoose.models.file_656ec96ad60332f945d29f90) {
    File_656ec96ad60332f945d29f90 = mongoose.model('file_656ec96ad60332f945d29f90')
} else {

//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    studentId : String,
    studentName : String,
    conferenceName : String,
    conferenceType : String,
    attendedFrom : String,
    attendedTo : String,
    organizationName : String,
    remarks : String,
    year: String,
    branch: String,
    section: String
})
File_656ec96ad60332f945d29f90 = mongoose.model('file_656ec96ad60332f945d29f90',Form)
}

module.exports = File_656ec96ad60332f945d29f90