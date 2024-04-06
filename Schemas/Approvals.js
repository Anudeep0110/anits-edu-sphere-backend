const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    approvals_id:String,
    formid:String,
    data: mongoose.Schema.Types.Mixed,
    approval:String
});

module.exports = mongoose.model('approvals',Form) 