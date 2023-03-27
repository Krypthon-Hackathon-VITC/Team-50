const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const DoctorLogin = require('../Schemas/doctorLogin')

router.use(bodyParser.json());

router.post('/login', async (req, res) => {
    const { employeeID, password } = req.body;

    if (!employeeID || !password) {
        res.status(400).json({ error: 'Email and password are required' });
        return;
    }

    try {
        const doctorLogin = await DoctorLogin.findOne({ employeeID, password });

        if (!doctorLogin) {
            res.status(401).json({ error: 'Invalid employeeID or password' });
            return;
        }

        res.status(200).json(doctorLogin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router