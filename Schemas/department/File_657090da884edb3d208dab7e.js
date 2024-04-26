//Form Name: Workshops organised

//If this form is not found in database use the following query by pasting it in the terminal
//db.forms.find({formname:"Workshops organised "});
//The space at the end makes the difference 

const mongoose = require('mongoose')
let File_657090da884edb3d208dab7e;


if (mongoose.models.file_657090da884edb3d208dab7e) {
    File_657090da884edb3d208dab7e = mongoose.model('file_657090da884edb3d208dab7e')
} else {
const Form = new mongoose.Schema({
    dept_id:String,
    workshopTitle:String,
    workshopOrganizer:String,
    organizerDesignation:String,
    workshopCoordinator:String,
    coordinatorDesignation:String,
    workshopDateAndTime:String,
    workshopDuration:String,
    workshopVenue:String,
    department:String,
    targetAudience:String,
    workshopTopics:String,
    workshopResourcePersons:String,
    numberOfParticipants:String, 
    workshopRegistration:String,
    workshopFeedback:String,
})
File_657090da884edb3d208dab7e = mongoose.model('file_657090da884edb3d208dab7e',Form)
}
module.exports = File_657090da884edb3d208dab7e