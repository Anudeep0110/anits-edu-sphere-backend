const mongoose = require('mongoose');

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
});

module.exports = mongoose.model('file_65704306ce04c156881ab9a3', Form);
