const mongoose = require('mongoose')

//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    facultyId : String,
    facultyName : String,
    department : String,
    awardName : String,
    awardingBody : String,
    achievementDate : String,
});

module.exports = mongoose.model('file_656b2561988da5fb17a661f1',Form)
