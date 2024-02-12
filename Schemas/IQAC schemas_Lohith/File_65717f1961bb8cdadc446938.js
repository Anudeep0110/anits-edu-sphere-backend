const mongoose = require('mongoose')

const Login = new mongoose.Schema({
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



});

module.exports = mongoose.model('file_65717f1961bb8cdadc446938',Form) 