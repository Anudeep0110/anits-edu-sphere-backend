const mongoose = require('mongoose')

//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    studentId : String,
    studentName : String,
    yearAndBranch : String,
    eventName : String,
    eventType : String,
    organizationName : String,
    eventDates : String,
    prizesWon : String,
});

module.exports = mongoose.model('file_656ec917d60332f945d29f8f',Form)
