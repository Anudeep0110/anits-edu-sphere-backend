const mongoose = require('mongoose');

// Form name: Collaborations with various domain-specific industries
const Form = new mongoose.Schema({
    // Columns with their respective types
    tnp_id:String,
    IndustryDomain: String,
    CompanyName: String,
    StartDate: String,
    EndDate: String,
    CollabarationType: String,
});

module.exports = mongoose.model('file_6571cccb251f44b834e6d61e', Form);
