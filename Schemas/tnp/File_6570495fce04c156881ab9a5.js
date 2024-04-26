const mongoose = require('mongoose');
let File_6570495fce04c156881ab9a5;

if (mongoose.models.file_6570495fce04c156881ab9a5) {
    File_6570495fce04c156881ab9a5 = mongoose.model('file_6570495fce04c156881ab9a5')
} else {
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
})
File_6570495fce04c156881ab9a5 = mongoose.model('file_6570495fce04c156881ab9a5', Form);
}

module.exports = File_6570495fce04c156881ab9a5
