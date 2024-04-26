const mongoose = require('mongoose');
let File_6571bd21251f44b834e6d618;

if (mongoose.models.file_6571bd21251f44b834e6d618) {
   File_6571bd21251f44b834e6d618  = mongoose.model('file_6571bd21251f44b834e6d618')
} else {
// Form name: Placements
const Form = new mongoose.Schema({
    tnp_id:String,
    StudentID: String,
    StudentName: String,
    Department: String,
    GradYear: Number,
    CompanyName: String,
    Designation: String,
    Package: String,
})
File_6571bd21251f44b834e6d618 = mongoose.model('file_6571bd21251f44b834e6d618', Form)
}
module.exports = File_6571bd21251f44b834e6d618