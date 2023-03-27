const mongoose = require('mongoose');

const connectToMongo = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/HealthCare')
}

module.exports = connectToMongo;