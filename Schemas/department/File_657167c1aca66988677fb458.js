const mongoose = require('mongoose')
let File_657167c1aca66988677fb458;

if (mongoose.models.file_657167c1aca66988677fb458) {
    File_657167c1aca66988677fb458 = mongoose.model('file_657167c1aca66988677fb458')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    studentName:String,
    rollNumber:String,
    examinationName:String,
    level:String,
    rankScore:String,
    year:String,
    subjectCategory:String,
    collegeAdmitted:String,
    admissionYear:String
})
File_657167c1aca66988677fb458 =mongoose.model('file_657167c1aca66988677fb458',Form)
}
module.exports = File_657167c1aca66988677fb458