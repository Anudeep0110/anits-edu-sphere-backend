const mongoose = require('mongoose')
let File_656ec115d60332f945d29f87;


if (mongoose.models.file_656ec115d60332f945d29f87) {
    File_656ec115d60332f945d29f87 = mongoose.model('file_656ec115d60332f945d29f87')
} else {
//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    facultyId : String,
    facultyName : String,
    titleOfThePaper : String,
    titleOfConferenceProceedings : String,
    yearOfPublication : String,
    isbnIssnNumber : String,
    numberOfCitations : String,
    hIndex : String,
    affiliatingInstitution : String,
    nameOfThePublisher : String,
    branch : String
})
File_656ec115d60332f945d29f87 = mongoose.model('file_656ec115d60332f945d29f87',Form)
}

module.exports = File_656ec115d60332f945d29f87