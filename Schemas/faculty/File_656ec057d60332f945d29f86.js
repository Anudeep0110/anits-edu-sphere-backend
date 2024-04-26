const mongoose = require('mongoose')
let File_656ec057d60332f945d29f86;

if (mongoose.models.file_656ec057d60332f945d29f86) {
    File_656ec057d60332f945d29f86 = mongoose.model('file_656ec057d60332f945d29f86')
} else {

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
})
File_656ec057d60332f945d29f86 = mongoose.model('file_656ec057d60332f945d29f86',Form)
}
module.exports = File_656ec057d60332f945d29f86