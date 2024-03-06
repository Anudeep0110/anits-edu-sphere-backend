const mongoose = require('mongoose');

// Define schema for students collection
const studentSchema = new mongoose.Schema({
  // Personal Information
  name: {
    type: String,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  address: {
    type: String,
  },
  contact_number: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  
  // Academic Information
  roll_number: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
  },
  course: {
    type: String,
  },
  batch: {
    type: Number,
  },
  admission_date: {
    type: Date,
  },
  
  // NAAC Inspection Related Information
  attendance_percentage: {
    type: Number,
  },
  marks_percentage: {
    type: Number,
  },
  feedback: {
    type: String
  }
});

// Create model from schema
const Student = mongoose.model('studentdetails', studentSchema);

module.exports = Student;
