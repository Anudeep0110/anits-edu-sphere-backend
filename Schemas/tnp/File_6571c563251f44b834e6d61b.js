const mongoose = require('mongoose');

let File_6571c563251f44b834e6d61b;

if (mongoose.models.file_6571c563251f44b834e6d61b) {
    File_6571c563251f44b834e6d61b = mongoose.model('file_6571c563251f44b834e6d61b')
} else {
// Form name: Number Of Companies
const Form = new mongoose.Schema({
    // Columns with their respective types
    tnp_id:String,
    CompanyName: String,
    TotalPlacements: Number,
    GradYear: Number,
})
File_6571c563251f44b834e6d61b = mongoose.model('file_6571c563251f44b834e6d61b', Form);
}
module.exports = File_6571c563251f44b834e6d61b
