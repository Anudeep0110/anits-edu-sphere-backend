const mongoose = require('mongoose')
//formname:Activities on Entrepreneurship
const Form = new mongoose.Schema({
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

module.exports = mongoose.model('forms',Form)