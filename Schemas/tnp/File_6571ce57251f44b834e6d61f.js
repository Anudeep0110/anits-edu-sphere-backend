const mongoose = require('mongoose');

let File_6571ce57251f44b834e6d61f;
if (mongoose.models.file_6571ce57251f44b834e6d61f) {
    File_6571ce57251f44b834e6d61f = mongoose.model('file_6571ce57251f44b834e6d61f')
} else {
// Form name: Career Development Programmes organized
const Form = new mongoose.Schema({
    // Columns with their respective types
    tnp_id:String,
    ProgramName: String,
    StartDate: String,
    EndDate: String,
    ParticipantCount: Number,
    Speakers: String,
})
File_6571ce57251f44b834e6d61f = mongoose.model('file_6571ce57251f44b834e6d61f', Form);
}
module.exports = File_6571ce57251f44b834e6d61f
