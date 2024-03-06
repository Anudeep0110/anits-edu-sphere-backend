const mongoose = require('mongoose')

//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    studentId : String,
    studentName : String,
    yearAndBranch : String,
    conferenceName : String,
    conferenceType : String,
    attendedFrom : String,
    attendedTo : String,
    organizationName : String,
    remarks : String,
});

module.exports = mongoose.model('file_656ec96ad60332f945d29f90',Form)
