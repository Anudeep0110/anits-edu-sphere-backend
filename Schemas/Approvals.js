const mongoose = require('mongoose')

let Approvals;

if (mongoose.models.approvals) {
    Approvals = mongoose.model('approvals')
}
else {
const Form = new mongoose.Schema({
    approvals_id:String,
    formid:String,
    data: mongoose.Schema.Types.Mixed,
    approval:String
})
Approvals = mongoose.model('approvals',Form) 
}
module.exports = Approvals