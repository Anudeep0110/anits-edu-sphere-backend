const mongoose = require('mongoose');

// Form name: Organizing Entrepreneurship development programs to motivate the students to become entrepreneurs
const FormSchema = new mongoose.Schema({
    // Columns with their respective types
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

module.exports = mongoose.model('File_65704ba1ce04c156881ab9a6', FormSchema);
