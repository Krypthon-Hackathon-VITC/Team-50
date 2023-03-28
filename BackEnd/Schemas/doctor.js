const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    employeeID: { type: String, required: true },
    specialty: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true },
    bio: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);
