const mongoose = require('mongoose');

// Form name: Enhancing Alumni Connect & Inculcating Students Driven Approach
const FormSchema = new mongoose.Schema({

    EventName: String,
    EventDate: String,
    AluminiName: String,
    EventOutcome: String,
});

module.exports = mongoose.model('file_6571cb44251f44b834e6d61d', Form);
