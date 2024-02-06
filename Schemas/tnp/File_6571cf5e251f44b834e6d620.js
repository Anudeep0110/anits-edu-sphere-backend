const mongoose = require('mongoose');

// Form name: Online tests conducted for campus readiness
const FormSchema = new mongoose.Schema({
    // Columns with their respective types
    TestName: String,
    TestDate: String,
    Departments: String,
    ParticipantCount: Number,
});

module.exports = mongoose.model('File_6571cf5e251f44b834e6d620', Form);
