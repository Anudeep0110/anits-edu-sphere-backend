const mongoose = require('mongoose')

let File_656eff5f569fa41d072f767a;

if (mongoose.models.file_656eff5f569fa41d072f767a) {
    File_656eff5f569fa41d072f767a = mongoose.model('file_656eff5f569fa41d072f767a')
} else {

//Form name: Value added courses/ Certificate courses organized
const Form = new mongoose.Schema({
    dept_id:String,
    academicYear:String,
    typeOfCourse:String,
    courseTitle:String,
    targetAudience:String,
    numberOfParticipants:String,
    hoursOfTraining:String,
    resourcePerson:String,
})
File_656eff5f569fa41d072f767a = mongoose.model('file_656eff5f569fa41d072f767a',Form)
}
module.exports = File_656eff5f569fa41d072f767a