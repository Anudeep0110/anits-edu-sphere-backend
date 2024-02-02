//Form Name:Publication of technical magazines, newsletters, etc

const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    yearOfPublication:String,
    nameOfArticle:String,
    editorialBoard:String,
    chiefEditor:String,
});

module.exports = mongoose.model('forms',Form)