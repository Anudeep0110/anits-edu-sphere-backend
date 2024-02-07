const mongoose = require('mongoose');

// Form name: MoUs for Enhanced Employability of Students
const FormSchema = new mongoose.Schema({
    // Columns with their respective types
    OrganisationName: String,
    TypeOfCollab: String,
    StartDate: String,
    EndDate: String,
    Pointofcontact: String,
});

module.exports = mongoose.model('file_6571c984251f44b834e6d61c', Form);
