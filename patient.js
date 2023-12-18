const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientID: {
    type: String,
    required: true,
    unique: true,
  },
  surname: {
    type: String,
    required: true,
  },
  otherNames: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  residentialAddress: {
    type: String,
    required: true,
  },
  emergencyContact: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: Date,
  },
  email: {
    type: String,
    lowercase: true,
  },
  medicalHistory: {
    allergies: String,
    medications: String,
    surgeries: String,
    familyHistory: String,
  },
});

module.exports = mongoose.model('Patient', patientSchema);
