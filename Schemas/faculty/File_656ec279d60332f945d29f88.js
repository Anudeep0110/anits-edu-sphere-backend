const mongoose = require('mongoose')
let File_656ec279d60332f945d29f88;


if (mongoose.models.file_656ec279d60332f945d29f88) {
    File_656ec279d60332f945d29f88 = mongoose.model('file_656ec279d60332f945d29f88')
} else {
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
})
File_656ec279d60332f945d29f88 = mongoose.model('file_656ec279d60332f945d29f88',Form)
}
module.exports = File_656ec279d60332f945d29f88
