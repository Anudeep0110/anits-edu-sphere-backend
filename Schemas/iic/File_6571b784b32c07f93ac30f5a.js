const mongoose = require('mongoose')
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
});

module.exports = mongoose.model('file_6571b784b32c07f93ac30f5a',Form)