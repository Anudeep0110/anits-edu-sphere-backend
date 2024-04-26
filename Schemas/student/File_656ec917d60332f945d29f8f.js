const mongoose = require('mongoose')
let File_656ec917d60332f945d29f8f;
if (mongoose.models.file_656ec917d60332f945d29f8f) {
    File_656ec917d60332f945d29f8f = mongoose.model('file_656ec917d60332f945d29f8f')
} else {

//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    studentId : String,
    studentName : String,
    eventName : String,
    eventType : String,
    organizationName : String,
    eventDates : String,
    prizesWon : String,
    year: String,
    branch: String,
    section: String
})
File_656ec917d60332f945d29f8f = mongoose.model('file_656ec917d60332f945d29f8f',Form)
}

module.exports = File_656ec917d60332f945d29f8f 
