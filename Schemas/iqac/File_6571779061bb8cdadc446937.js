const mongoose = require('mongoose')
let File_6571779061bb8cdadc446937;

if (mongoose.models.file_6571779061bb8cdadc446937) {
    File_6571779061bb8cdadc446937 = mongoose.model('file_6571779061bb8cdadc446937')
} else {
const Form = new mongoose.Schema({
    iqac_id:String,
    academicYear:String,
    auditScope:String,
    auditTeamComposition:String,
    auditMethodology:String,
    auditTimeline:String
})
File_6571779061bb8cdadc446937 = mongoose.model('file_6571779061bb8cdadc446937',Form) 
}
module.exports =  File_6571779061bb8cdadc446937