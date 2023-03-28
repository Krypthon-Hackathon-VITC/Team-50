const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  occupation: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  medicalHistory: { type: String },
  chronicConditions: { type: String },
  allergies: { type: String },
  medications: { type: String },
  familyHistory: { type: String },
  lifestyleFactors: { type: String },
  recentChanges: { type: String },
  preferredCommunication: { type: String },
  healthcarePreferences: { type: String },
  culturalConsiderations: { type: String },
  currentIllness: { type: String },
  status: { type: String, required: true }
});

module.exports = mongoose.model('Patient', patientSchema);
