const mongoose = require('mongoose');
let File_65704ba1ce04c156881ab9a6;

if (mongoose.models.file_65704ba1ce04c156881ab9a6) {
    File_65704ba1ce04c156881ab9a6 = mongoose.model('file_65704ba1ce04c156881ab9a6')
} else {
// Form name: Organizing Entrepreneurship development programs to motivate the students to become entrepreneurs
const Form = new mongoose.Schema({
    tnp_id:String,
    ProgramID: String,
    ProgramName: String,
    Date: String,
    DurationHours: Number,
    OrganizerName: String,
    GuestSpeakerName: String,
    GuestSpeakerOrganization: String,
    GuestSpeakerTopic: String,
    Location: String,
    AttendeesCount: Number,
    Feedback: String,
})
File_65704ba1ce04c156881ab9a6 = mongoose.model('file_65704ba1ce04c156881ab9a6', Form);
}
module.exports = File_65704ba1ce04c156881ab9a6