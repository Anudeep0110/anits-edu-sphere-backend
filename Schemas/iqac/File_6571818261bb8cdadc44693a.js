const mongoose = require('mongoose')
let File_6571818261bb8cdadc44693a;

if (mongoose.models.file_6571818261bb8cdadc44693a) {
    File_6571818261bb8cdadc44693a = mongoose.model('file_6571818261bb8cdadc44693a')
} else {
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
    


})
File_6571818261bb8cdadc44693a = mongoose.model('file_6571818261bb8cdadc44693a',Form)
}
module.exports =  File_6571818261bb8cdadc44693a