//Form Name: Workshops organised

//If this form is not found in database use the following query by pasting it in the terminal
//db.forms.find({formname:"Workshops organised "});
//The space at the end makes the difference 

const mongoose = require('mongoose')

const Form = new mongoose.Schema({
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
});

module.exports = mongoose.model('file_657090da884edb3d208dab7e',Form)