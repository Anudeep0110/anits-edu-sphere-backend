const mongoose = require('mongoose')
let File_65717f1961bb8cdadc446938;

if (mongoose.models.file_65717f1961bb8cdadc446938) {
    File_65717f1961bb8cdadc446938 = mongoose.model('file_65717f1961bb8cdadc446938')
} else {
const Form = new mongoose.Schema({
    iqac_id:String,
    departmentName:String,
    auditDate:String,
    auditorNames:String,
    auditCriteria:String,
    finding:String,
    severity:String,
    recommendation:String,
    correctiveActionTaken:String,
    closingDate:String,
    examSectionFunction:String


})
File_65717f1961bb8cdadc446938 = mongoose.model('file_65717f1961bb8cdadc446938',Form) 
}
module.exports =  File_65717f1961bb8cdadc446938