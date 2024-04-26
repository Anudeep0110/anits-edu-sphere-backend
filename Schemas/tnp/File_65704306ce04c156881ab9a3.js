
const mongoose = require('mongoose');
let File_65704306ce04c156881ab9a3;

if (mongoose.models.file_65704306ce04c156881ab9a3) {
    File_65704306ce04c156881ab9a3 = mongoose.model('file_65704306ce04c156881ab9a3')
} else {
// Form name: Internships
const Form = new mongoose.Schema({
    tnp_id:String,
    InternshipID: String,
    StudentID: String,
    CompanyName: String,
    Position: String,
    StartDate: String,
    EndDate: String,
    SupervisorName: String,
    SupervisorEmail: String,
    Pay: Number,
    HoursPerWeek: Number,
})
File_65704306ce04c156881ab9a3 = mongoose.model('file_65704306ce04c156881ab9a3', Form);
}
module.exports = File_65704306ce04c156881ab9a3
