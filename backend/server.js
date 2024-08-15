const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("Error : ", error);
    });