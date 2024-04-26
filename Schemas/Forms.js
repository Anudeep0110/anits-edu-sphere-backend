const mongoose = require('mongoose')
let  Forms;

if (mongoose.models.forms) {
    Forms = mongoose.model('forms')
} else {
const Form = new mongoose.Schema({
    formname:String,
    columns:Object,
    desc:String,
    role:String
})
 Forms = mongoose.model('forms',Form)
}
module.exports = Forms