const mongoose = require('mongoose')
let File_656ec9dad60332f945d29f91;

if (mongoose.models.file_656ec9dad60332f945d29f91) {
   File_656ec9dad60332f945d29f91  = mongoose.model('file_656ec9dad60332f945d29f91')
} else {

//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    studentId : String,
    paperTitle : String,
    studentName : String,
    journalName : String,
    yearOfPublication : String,
    issnNumber : String,
    journalWebsiteLink : String,
    articleLink : String,
    listedIn : String,
    year: String,
    branch: String,
    section: String
})
File_656ec9dad60332f945d29f91 = mongoose.model('file_656ec9dad60332f945d29f91',Form)
}
module.exports = File_656ec9dad60332f945d29f91
