const mongoose = require('mongoose');

// Form name: Career Counselling for pursuing higher studies
const Form = new mongoose.Schema({
    tnp_id:String,
    CounselingID: String,
    StudentID: String,
    CounselorName: String,
    Date: String,
    DurationHours: Number,
    Mode: String,
    Purpose: String,
    Recommendations: String,
    FollowUpDate:String,
});

module.exports = mongoose.model('file_6570495fce04c156881ab9a5', Form);
