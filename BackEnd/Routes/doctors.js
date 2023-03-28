const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Doctor = require('../Schemas/doctor')
const Patient = require('../Schemas/patient')

router.use(bodyParser.json());

router.post('/doctorForm', async (req, res) => {

    const { fullName, speciality, address, phoneNumber, email, yearsOfExperience, bio, status } = req.body;

    const doctor = Doctor({ fullName, speciality, address, phoneNumber, email, yearsOfExperience, bio, status });

    try {
        await doctor.save();
        res.status(201).json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/doctor-details', (req, res) => {
    const { fullName, employeeID } = req.body;

    // Find doctor with matching name, email, and password
    Doctor.findOne({ fullName, employeeID })
        .then((doctor) => {
            if (doctor) {
                // Return doctor details if found
                res.status(200).send(doctor);
            } else {
                // Return error message if doctor not found
                res.status(404).send({ message: 'Doctor not found' });
            }
        })
        .catch((error) => {
            // Return error message if there is a database error
            res.status(500).send({ message: 'Database error', error });
        });
});

router.post('/patientGroup', async (req, res) => {
    const { currentIllness, status } = req.body;
    try {
        const patients = await Patient.find({ currentIllness, status });
        res.json(patients);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router