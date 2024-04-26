//Form Name: Feedback for Curriculum

//If this form is not found in database use the following command
//  db.forms.find({role:"general"});
//The AI chatbot filled in the role as general, need to change that.
//Until further change use the above command to loate it in the database 

const mongoose = require('mongoose')

let File_65709184884edb3d208dab82;

if (mongoose.models.file_65709184884edb3d208dab82) {
    File_65709184884edb3d208dab82 = mongoose.model('file_65709184884edb3d208dab82')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    courseCode:String,
    courseName:String,
    offeredBy:String,
    semester:String,
    academicYear:String,
    studentName:String,
    rollNum:String,
    overallCourseContent:String,
    deliveryOfCourseMaterial:String,
    assessmentMethods:String,
    workloadAndDifficultyLevel:String,
    facultyExpertiseAndTeachingEffectiveness:String,
    useOfTechnologyInLearning:String, 
    learningOutcomesAndSkillsDeveloped:String,
    suggestionsForImprovement:String,
    additionalComments:String,
})
File_65709184884edb3d208dab82 = mongoose.model('file_65709184884edb3d208dab82',Form)
}
module.exports = File_65709184884edb3d208dab82