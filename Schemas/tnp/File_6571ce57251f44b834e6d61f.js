const mongoose = require('mongoose');

// Form name: Career Development Programmes organized
const FormSchema = new mongoose.Schema({
    // Columns with their respective types
    ProgramName: String,
    StartDate: String,
    EndDate: String,
    ParticipantCount: Number,
    Speakers: String,
});

module.exports = mongoose.model('File_6571ce57251f44b834e6d61f', Form);