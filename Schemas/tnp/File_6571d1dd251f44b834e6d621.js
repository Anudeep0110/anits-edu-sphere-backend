const mongoose = require('mongoose');

// Form name: Mock Interviews and group discussion organized
const FormSchema = new mongoose.Schema({
    EventName: String,
    EventDate: String,
    EventOutcome: String,
    ParticipantCount: Number,
});

module.exports = mongoose.model('file_6571d1dd251f44b834e6d621', Form);
