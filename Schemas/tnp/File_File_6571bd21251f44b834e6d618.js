const mongoose = require('mongoose');

// Form name: Placements
const FormSchema = new mongoose.Schema({
    // Columns with their respective types
    StudentID: String,
    StudentName: String,
    Department: String,
    GradYear: Number,
    CompanyName: String,
    Designation: String,
    Package: String,
});

module.exports = mongoose.model('File_6571bd21251f44b834e6d618', Form);
