const mongoose = require('mongoose');
let  File_6571cccb251f44b834e6d61e;

if (mongoose.models.file_6571cccb251f44b834e6d61e) {
    File_6571cccb251f44b834e6d61e = mongoose.model('file_6571cccb251f44b834e6d61e')
} else {
// Form name: Collaborations with various domain-specific industries
const Form = new mongoose.Schema({
    // Columns with their respective types
    tnp_id:String,
    IndustryDomain: String,
    CompanyName: String,
    StartDate: String,
    EndDate: String,
    CollabarationType: String,
})
File_6571cccb251f44b834e6d61e = mongoose.model('file_6571cccb251f44b834e6d61e', Form);
}

module.exports = File_6571cccb251f44b834e6d61e