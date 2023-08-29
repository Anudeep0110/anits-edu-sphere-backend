const mongoose = require('mongoose')

const Login = new mongoose.Schema({
    username:String,
    password:String,
    mailId:String,
})

module.exports = mongoose.model('logins',Login)