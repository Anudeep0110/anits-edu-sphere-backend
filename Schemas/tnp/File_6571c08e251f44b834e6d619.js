const mongoose = require('mongoose');

// Form name: Number Of Core Placements
const FormSchema = new mongoose.Schema({
    // Columns with their respective types
    Department: String,
    CompanyName: String,
    NoofCorePlacements: Number,
    GradYear: Number,
});

module.exports = mongoose.model('file_6571c08e251f44b834e6d619', Form);
