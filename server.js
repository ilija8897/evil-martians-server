require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const registrationRouter = require('./app/routes/registrationRoutes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(registrationRouter);

const start = async () => {
    try {
        await mongoose
        .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('DB Connected');
        })
        app.listen(process.env.PORT, () => console.log('Server started'));
    } catch (error) {
        console.log(error);
    }
}

start();
