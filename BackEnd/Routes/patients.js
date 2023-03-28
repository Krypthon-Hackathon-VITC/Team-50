const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Patient = require('../Schemas/patient')

router.use(bodyParser.json());

router.post('/patientForm', async (req, res) => {

    const { fullName, email, dateOfBirth, occupation, address, phoneNumber, medicalHistory, chronicConditions, allergies, medications, familyHistory, lifestyleFactors, recentChanges, preferredCommunication, healthcarePreferences, culturalConsiderations, currentIllness, status } = req.body;

    const patient = Patient({ fullName, email, dateOfBirth, occupation, address, phoneNumber, medicalHistory, chronicConditions, allergies, medications, familyHistory, lifestyleFactors, recentChanges, preferredCommunication, healthcarePreferences, culturalConsiderations, currentIllness, status });

    try {
        await patient.save();
        res.status(201).json(patient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/patient-details', (req, res) => {
    const { fullName, email } = req.body;

    // Find patient with matching name, email, and password
    Patient.findOne({ fullName, email })
        .then((patient) => {
            if (patient) {
                // Return patient details if found
                res.status(200).send(patient);
            } else {
                // Return error message if patient not found
                res.status(404).send({ message: 'Patient not found' });
            }
        })
        .catch((error) => {
            // Return error message if there is a database error
            res.status(500).send({ message: 'Database error', error });
        });
});

module.exports = router