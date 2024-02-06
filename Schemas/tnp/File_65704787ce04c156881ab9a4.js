const mongoose = require('mongoose');

// Form name: Organizing subject / domain specific Technical skills Training by experts
const FormSchema = new mongoose.Schema({
    // Columns with their respective types
    TrainingID: String,
    SubjectDomain: String,
    ExpertName: String,
    ExpertOrganization: String,
    Date: String,
    DurationHours: Number,
    Location: String,
    ParticipantsCount: Number,
    Feedback: String,
});

module.exports = mongoose.model('File_65704787ce04c156881ab9a4', Form);
