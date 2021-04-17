const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required',
  },

  email: {
    type: String,
    required: 'Email is required',
  },

  password: {
    type: String,
    required: 'Password is required',
  },

  todos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Todo',
  },
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('User', userSchema);
