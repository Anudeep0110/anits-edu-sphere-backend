const mongoose = require('mongoose');

// Define student schema
const studentSchema = new mongoose.Schema({
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
  regno: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true,
    default: 'csmd'
  },
  section: {
    type: String,
    required: true,
    default: 'csm'
  },
  contact: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  from_year: {
    type: Number,
    required: true,
    default: 2020
  },
  to_year: {
    type: Number,
    required: true,
    default: 2024
  }
});

// Create a Mongoose model
const Student = mongoose.model('students', studentSchema);

module.exports = Student;
