const mongoose = require('mongoose');

// Form name: Career Development Programmes organized
const Form = new mongoose.Schema({
    // Columns with their respective types
    ProgramName: String,
    StartDate: String,
    EndDate: String,
    ParticipantCount: Number,
    Speakers: String,
});

module.exports = mongoose.model('file_6571ce57251f44b834e6d61f', Form);
