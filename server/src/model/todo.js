const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Name is required',
  },

  description: {
    type: String,
    required: 'Email is required',
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

todoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Todo', todoSchema);
