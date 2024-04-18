const mongoose = require('mongoose')

//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    facultyId : String,
    facultyName : String,
    branch : String,
    workshopConferenceSeminarDetails : String,
    eventType : String,
    nationalInternational : String,
    durationFrom : String,
    durationTo : String,
    organizationName : String,
    remarks : String,
});

module.exports = mongoose.model('file_656ec279d60332f945d29f88',Form)
