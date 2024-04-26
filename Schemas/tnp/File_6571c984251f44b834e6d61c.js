const mongoose = require('mongoose');

let File_6571c984251f44b834e6d61c;
if (mongoose.models.file_6571c984251f44b834e6d61c) {
    File_6571c984251f44b834e6d61c = mongoose.model('file_6571c984251f44b834e6d61c')
} else {
// Form name: MoUs for Enhanced Employability of Students
const Form = new mongoose.Schema({
    // Columns with their respective types
    tnp_id:String,
    OrganisationName: String,
    TypeOfCollab: String,
    StartDate: String,
    EndDate: String,
    Pointofcontact: String,
})
File_6571c984251f44b834e6d61c =  mongoose.model('file_6571c984251f44b834e6d61c', Form);
}

module.exports = File_6571c984251f44b834e6d61c
