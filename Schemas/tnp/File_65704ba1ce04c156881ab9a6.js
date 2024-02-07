const mongoose = require('mongoose');

// Form name: Organizing Entrepreneurship development programs to motivate the students to become entrepreneurs
const Form = new mongoose.Schema({
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
});

module.exports = mongoose.model('file_65704ba1ce04c156881ab9a6', Form);
