const mongoose = require('mongoose');

let Faculty;

if (mongoose.models.faculties) {
  Faculty = mongoose.model('faculties')
} else {
// Define faculty schema
const facultySchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  middle_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  employee_id: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  join_year: {
    type: Number,
    required: true
  },
  experience_years: {
    type: Number,
    required: true
  }
})
Faculty = mongoose.model('faculties', facultySchema);
}

module.exports = Faculty
