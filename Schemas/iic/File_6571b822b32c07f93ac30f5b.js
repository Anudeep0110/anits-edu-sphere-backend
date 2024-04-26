const mongoose = require('mongoose')
let File_6571b822b32c07f93ac30f5b;

if (mongoose.models.file_6571b822b32c07f93ac30f5b) {
    File_6571b822b32c07f93ac30f5b = mongoose.model('file_6571b822b32c07f93ac30f5b')
} else {

//formname:Activities on Innovation
const Form = new mongoose.Schema({
    iic_id:String,
    ActivityID:String,
    ActivityName:String,
    Date:String,
    Organizer:String,
    Participants:String,
    Description:String,
    Outcome:String,
    ResourcesUsed:String,
    Impact:String,
    Feedback:String,

})
File_6571b822b32c07f93ac30f5b =  mongoose.model('file_6571b822b32c07f93ac30f5b',Form)
}
module.exports = File_6571b822b32c07f93ac30f5b