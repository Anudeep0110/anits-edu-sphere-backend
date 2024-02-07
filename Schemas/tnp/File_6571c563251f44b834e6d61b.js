const mongoose = require('mongoose');

// Form name: Number Of Companies
const FormSchema = new mongoose.Schema({
    // Columns with their respective types
    CompanyName: String,
    TotalPlacements: Number,
    GradYear: Number,
});

module.exports = mongoose.model('file_6571c563251f44b834e6d61b', Form);
