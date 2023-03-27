const mongoose = require('mongoose');
const { Schema } = mongoose;

const doctorLoginSchema = new mongoose.Schema({
    name: String,
    employeeID: String,
    password: String
});

module.exports = mongoose.model('DoctorLogin', doctorLoginSchema);
