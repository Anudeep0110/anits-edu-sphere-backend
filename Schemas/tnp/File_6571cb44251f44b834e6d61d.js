const mongoose = require('mongoose');
let File_6571cb44251f44b834e6d61d;

if (mongoose.models.file_6571cb44251f44b834e6d61d) {
    File_6571cb44251f44b834e6d61d = mongoose.model('file_6571cb44251f44b834e6d61d')
} else {
// Form name: Enhancing Alumni Connect & Inculcating Students Driven Approach
const Form = new mongoose.Schema({
    tnp_id:String,
    EventName: String,
    EventDate: String,
    AluminiName: String,
    EventOutcome: String,
})
File_6571cb44251f44b834e6d61d = mongoose.model('file_6571cb44251f44b834e6d61d', Form);
}

module.exports = File_6571cb44251f44b834e6d61d
