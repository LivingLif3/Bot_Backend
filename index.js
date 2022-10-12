require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routers/index');

const app = express();

const PORT = 5000 || process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/', router);

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/botData', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server starts on PORT: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
