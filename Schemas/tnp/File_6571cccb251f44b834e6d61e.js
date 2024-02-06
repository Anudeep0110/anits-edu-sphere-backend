const mongoose = require('mongoose');

// Form name: Collaborations with various domain-specific industries
const FormSchema = new mongoose.Schema({
    // Columns with their respective types
    IndustryDomain: String,
    CompanyName: String,
    StartDate: String,
    EndDate: String,
    CollabarationType: String,
});

module.exports = mongoose.model('File_6571cccb251f44b834e6d61e', Form);
