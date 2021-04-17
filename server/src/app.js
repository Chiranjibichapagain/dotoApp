const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./utils/config');

app.use(cors());
app.use(express.json());

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message);
  });

app.use('/api/todos', (req, res) => {
  res.send('success!!!');
});

module.exports = app;
