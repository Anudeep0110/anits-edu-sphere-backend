const mongoose = require('mongoose');
let File_6571c08e251f44b834e6d619;

if (mongoose.models.file_6571c08e251f44b834e6d619) {
    File_6571c08e251f44b834e6d619 = mongoose.model('file_6571c08e251f44b834e6d619')
} else {
// Form name: Number Of Core Placements
const Form = new mongoose.Schema({
    // Columns with their respective types
    tnp_id:String,
    Department: String,
    CompanyName: String,
    NoofCorePlacements: Number,
    GradYear: Number,
})
File_6571c08e251f44b834e6d619 =  mongoose.model('file_6571c08e251f44b834e6d619', Form)
}
module.exports = File_6571c08e251f44b834e6d619
