//Form Name:Publication of technical magazines, newsletters, etc
const mongoose = require('mongoose')
let File_6570916a884edb3d208dab81;

if (mongoose.models.file_6570916a884edb3d208dab81) {
    File_6570916a884edb3d208dab81 = mongoose.model('file_6570916a884edb3d208dab81')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    yearOfPublication:String,
    nameOfArticle:String,
    editorialBoard:String,
    chiefEditor:String,
})
File_6570916a884edb3d208dab81 = mongoose.model('file_6570916a884edb3d208dab81',Form)
}
module.exports = File_6570916a884edb3d208dab81