const mongoose = require('mongoose')
//formname:Activities on Innovation
const Form = new mongoose.Schema({
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

});

module.exports = mongoose.model('file_6571b822b32c07f93ac30f5b',Form)