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

module.exports = mongoose.model('file_656b26cf988da5fb17a661f3',Form)
