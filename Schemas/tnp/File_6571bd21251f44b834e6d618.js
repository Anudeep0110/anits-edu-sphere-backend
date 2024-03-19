const mongoose = require('mongoose');

// Form name: Placements
const Form = new mongoose.Schema({
    tnp_id:String,
    StudentID: String,
    StudentName: String,
    Department: String,
    GradYear: Number,
    CompanyName: String,
    Designation: String,
    Package: String,
});

module.exports = mongoose.model('file_6571bd21251f44b834e6d618', Form);
