const mongoose = require('mongoose')

//formname: Collaboration Linkages (Mo Us) with Higher Educational Institutions for promoting innovation and startup
const Form = new mongoose.Schema({
    facultyId : String,
    facultyName : String,
    titleOfTheBookChapters : String,
    yearOfPublication : String,
    isbnIssnNumber : String,
    affiliatingInstitution : String,
    nameOfThePublisher : String,
    branch : String
});

module.exports = mongoose.model('file_656ec057d60332f945d29f86',Form)
