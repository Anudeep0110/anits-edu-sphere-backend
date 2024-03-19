//Form Name:Publication of technical magazines, newsletters, etc

const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    dept_id:String,
    yearOfPublication:String,
    nameOfArticle:String,
    editorialBoard:String,
    chiefEditor:String,
});

module.exports = mongoose.model('file_6570916a884edb3d208dab81',Form)