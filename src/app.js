const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./utils/config');
const todoRouter = require('./routes/todoRouter');
const userRouter = require('./routes/userRouter');

app.use(cors()); //allows other domains to access the server
app.use(express.json()); // allows express to read the incoming object form POST and PUT requests as JSON.

mongoose
  .connect(process.env.MONGODB_URI || config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, // takes care of deprication warnings
  })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message);
  });

app.use('/api/todos', todoRouter);
app.use('/api/users', userRouter);

// Heroku deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

module.exports = app;
