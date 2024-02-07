const mongoose = require('mongoose')

//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    facultyId : String,
    nameOfTheTeacher : String,
    titleOfThePaper : String,
    titleOfConferenceProceedings : String,
    yearOfPublication : String,
    isbnIssnNumber : String,
    numberOfCitations : String,
    hIndex : String,
    affiliatingInstitution : String,
    nameOfThePublisher : String,
});

module.exports = mongoose.model('file_656ec115d60332f945d29f87',Form)
