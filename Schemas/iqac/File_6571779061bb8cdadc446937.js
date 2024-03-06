const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    academicYear:String,
    auditScope:String,
    auditTeamComposition:String,
    auditMethodology:String,
    auditTimeline:String
});

module.exports = mongoose.model('file_6571779061bb8cdadc446937',Form) 