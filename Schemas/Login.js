const mongoose = require('mongoose')

let Login;

if (mongoose.models.logins) {
    Login = mongoose.model('logins')
} else {
    const LoginSchema = new mongoose.Schema({
        regno:String,
        fullname:String,
        username:String,
        password:String,
        department:String,
        role:String
    })
    Login = mongoose.model('logins',LoginSchema)
}

module.exports = Login