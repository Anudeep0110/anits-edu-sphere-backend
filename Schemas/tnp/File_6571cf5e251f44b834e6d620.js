const mongoose = require('mongoose');

// Form name: Online tests conducted for campus readiness
const Form = new mongoose.Schema({
    TestName: String,
    TestDate: String,
    Departments: String,
    ParticipantCount: Number,
});

module.exports = mongoose.model('file_6571cf5e251f44b834e6d620', Form);
