const mongoose = require('mongoose');
let File_65704787ce04c156881ab9a4;

if (mongoose.models.file_65704787ce04c156881ab9a4) {
    File_65704787ce04c156881ab9a4 = mongoose.model('file_65704787ce04c156881ab9a4')
} else {
// Form name: Organizing subject / domain specific Technical skills Training by experts
const Form = new mongoose.Schema({
    tnp_id:String,
    TrainingID: String,
    SubjectDomain: String,
    ExpertName: String,
    ExpertOrganization: String,
    Date: String,
    DurationHours: Number,
    Location: String,
    ParticipantsCount: Number,
    Feedback: String,
})
File_65704787ce04c156881ab9a4 = mongoose.model('file_65704787ce04c156881ab9a4', Form);
}
module.exports = File_65704787ce04c156881ab9a4
