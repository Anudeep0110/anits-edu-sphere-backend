const mongoose = require('mongoose')

//Form name: Value added courses/ Certificate courses organized

const Form = new mongoose.Schema({
    academicYear:Number,
    typeOfCourse:String,
    courseTitle:String,
    targetAudience:String,
    numberOfParticipants:Number,
    hoursOfTraining:Number,
    resourcePerson:String,
});

module.exports = mongoose.model('file_656eff5f569fa41d072f767a',Form)