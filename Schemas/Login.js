const mongoose = require('mongoose')

const Login = new mongoose.Schema({
    username:String,
    password:String,
    department:String,
    role:String
})

module.exports = mongoose.model('logins',Login) 