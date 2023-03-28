const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const validator = require('validator');
const axios = require("axios");
const PatientLogin = require('../Schemas/patientLogin')

router.use(bodyParser.json());

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: 'Email and password are required' });
        return;
    }

    if (!validator.isEmail(email)) {
        res.status(400).json({ error: 'Invalid email format' });
        return;
    }

    try {
        const patientLogin = await PatientLogin.findOne({ email, password });

        if (!patientLogin) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }

        res.status(200).json(patientLogin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: email, secret: email, first_name: email },
            { headers: { "private-key": "fe2a468a-1eb7-4abb-851d-d4195061e017" } }
        )
        // return res.json(r.data)
        // console.log(r)
    } catch (e) {
        // return res.status(e.response.status).json(e.response.data);
        console.log(e)
    }
});

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({ error: 'Name, email, and password are required' });
        return;
    }

    if (!validator.isEmail(email)) {
        res.status(400).json({ error: 'Invalid email format' });
        return;
    }

    const existingPatient = await PatientLogin.findOne({ email });

    if (existingPatient) {
        res.status(409).json({ error: 'Email is already registered' });
        return;
    }

    const patientLogin = PatientLogin({ name, email, password });

    try {
        await patientLogin.save();
        res.status(201).json(patientLogin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router