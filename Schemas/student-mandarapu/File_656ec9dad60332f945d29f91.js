const mongoose = require('mongoose')

//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    studentId : String,
    paperTitle : String,
    studentName : String,
    yearAndBranch : String,
    journalName : String,
    yearOfPublication : String,
    issnNumber : String,
    journalWebsiteLink : String,
    articleLink : String,
    listedIn : String,
});

module.exports = mongoose.model('file_656ec9dad60332f945d29f91',Form)
