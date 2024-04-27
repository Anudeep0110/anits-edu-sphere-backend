const mongoose = require('mongoose');

let File_6571cf5e251f44b834e6d620;
if (mongoose.models.file_6571cf5e251f44b834e6d620) {
    File_6571cf5e251f44b834e6d620 = mongoose.model('file_6571cf5e251f44b834e6d620')
} else {
// Form name: Online tests conducted for campus readiness
const Form = new mongoose.Schema({
    tnp_id:String,
    TestName: String,
    TestDate: String,
    Departments: String,
    ParticipantCount: Number,
})
File_6571cf5e251f44b834e6d620 = mongoose.model('file_6571cf5e251f44b834e6d620', Form);
}
module.exports = File_6571cf5e251f44b834e6d620
