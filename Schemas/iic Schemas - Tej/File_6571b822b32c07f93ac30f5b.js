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

module.exports = mongoose.model('forms',Form)