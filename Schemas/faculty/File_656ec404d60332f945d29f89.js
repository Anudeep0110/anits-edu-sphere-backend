const mongoose = require('mongoose')

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
});

module.exports = mongoose.model('file_656ec404d60332f945d29f89',Form)
