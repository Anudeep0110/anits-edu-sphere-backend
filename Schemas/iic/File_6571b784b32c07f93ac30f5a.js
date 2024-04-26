const mongoose = require('mongoose')
let File_6571b784b32c07f93ac30f5a;

if (mongoose.models.file_6571b784b32c07f93ac30f5a) {
    File_6571b784b32c07f93ac30f5a = mongoose.model('file_6571b784b32c07f93ac30f5a')
} else {
//formname:Activities on Entrepreneurship
const Form = new mongoose.Schema({
    iic_id:String,
    ActivityID:String,
    ActivityName:String,
    Date:String,
    OrganizerName:String,
    Location:String,
    ParticipantsCount:String,
    Description:String,
    Outcome:String,
    Feedback:String,    
})
File_6571b784b32c07f93ac30f5a = mongoose.model('file_6571b784b32c07f93ac30f5a',Form)
}
module.exports = File_6571b784b32c07f93ac30f5a