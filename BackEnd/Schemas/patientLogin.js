const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientLoginSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('PatientLogin', patientLoginSchema);
