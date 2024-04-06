const mongoose = require('mongoose')

const Login = new mongoose.Schema({
    regno:String,
    fullname:String,
    username:String,
    password:String,
    department:String,
    role:String
})

module.exports = mongoose.model('logins',Login) 