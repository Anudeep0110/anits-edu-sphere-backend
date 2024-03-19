const mongoose = require('mongoose')

const Form = new mongoose.Schema({
    iqac_id:String,
    seminarID:String,
    seminarDate:String,
    seminarTopic:String,
    resourcePerson:String,
    targetAudience:String,
    numberOfParticipants:Number,
    duration:String,
    objectives:String,
    methodology:String,
    keyContent:String,
    feedback:String,
    followUpAction:String,
    resources:String
    


});

module.exports = mongoose.model('file_6571818261bb8cdadc44693a',Form) 