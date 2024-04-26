const mongoose = require('mongoose');
let File_6571d1dd251f44b834e6d621;

if (mongoose.models.file_6571d1dd251f44b834e6d621) {
    File_6571d1dd251f44b834e6d621 = mongoose.model('file_6571d1dd251f44b834e6d621')
} else {
// Form name: Mock Interviews and group discussion organized
const Form = new mongoose.Schema({
    tnp_id:String,
    EventName: String,
    EventDate: String,
    EventOutcome: String,
    ParticipantCount: Number,
})
File_6571d1dd251f44b834e6d621 = mongoose.model('file_6571d1dd251f44b834e6d621', Form);
}

module.exports = File_6571d1dd251f44b834e6d621
