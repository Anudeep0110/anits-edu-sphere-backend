const mongoose = require('mongoose')
let File_656ec404d60332f945d29f89;


if (mongoose.models.file_656ec404d60332f945d29f89) {
    File_656ec404d60332f945d29f89 = mongoose.model('file_656ec404d60332f945d29f89')
} else {
//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    facultyId : String,
    branch : String,
    journalName : String,
    yearOfPublication : String,
    issnNumber : String,
    volumeIssuePageNumbers : String,
    impactFactor : String,
    numberOfCitations : String,
    hIndex : String,
    journalWebsiteLink : String,
    articleLink : String,
    listedIn : String,
    facultyName : String
})
File_656ec404d60332f945d29f89 = mongoose.model('file_656ec404d60332f945d29f89',Form)
}
module.exports = File_656ec404d60332f945d29f89
