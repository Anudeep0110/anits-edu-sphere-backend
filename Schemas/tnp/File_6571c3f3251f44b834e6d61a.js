const mongoose = require('mongoose');

// Form name: Number Of Core Companies
const Form = new mongoose.Schema({
    // Columns with their respective types
    Department: String,
    CompanyName: String,
    GradYear: Number,
});

module.exports = mongoose.model('file_6571c3f3251f44b834e6d61a', Form);
