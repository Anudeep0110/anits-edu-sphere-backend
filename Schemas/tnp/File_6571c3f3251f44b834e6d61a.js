const mongoose = require('mongoose');
let File_6571c3f3251f44b834e6d61a;

if (mongoose.models.file_6571c3f3251f44b834e6d61a) {
    File_6571c3f3251f44b834e6d61a = mongoose.model('file_6571c3f3251f44b834e6d61a')
} else {

// Form name: Number Of Core Companies
const Form = new mongoose.Schema({
    // Columns with their respective types
    tnp_id:String,
    Department: String,
    CompanyName: String,
    GradYear: Number,
})
File_6571c3f3251f44b834e6d61a = mongoose.model('file_6571c3f3251f44b834e6d61a', Form)
}
module.exports = File_6571c3f3251f44b834e6d61a
