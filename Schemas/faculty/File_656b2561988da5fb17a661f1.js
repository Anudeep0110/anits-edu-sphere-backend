const mongoose = require('mongoose')
let File_656b2561988da5fb17a661f1;

if (mongoose.models.file_656b2561988da5fb17a661f1) {
    File_656b2561988da5fb17a661f1 = mongoose.model('file_656b2561988da5fb17a661f1')
} else {
//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    facultyId : String,
    facultyName : String,
    branch : String,
    awardName : String,
    awardingBody : String,
    achievementDate : String,
})
File_656b2561988da5fb17a661f1 = mongoose.model('file_656b2561988da5fb17a661f1',Form)
}
module.exports = File_656b2561988da5fb17a661f1