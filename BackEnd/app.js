const connectToMongo = require('./db')
const express = require('express')

connectToMongo();
const app = express()
const port = 3001

var cors = require('cors')
app.use(cors())

app.use(express.json())

// Available routes
app.use('/api/patientsLogin', require('./Routes/patientsLogin'))
app.use('/api/doctorsLogin', require('./Routes/doctorsLogin'))
app.use('/api/patients', require('./Routes/patients'))
app.use('/api/doctors', require('./Routes/doctors'))

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
