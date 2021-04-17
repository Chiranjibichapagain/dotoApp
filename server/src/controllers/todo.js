const User = require('../model/user');
const Todo = require('../model/todo');

const getUserTodos = async (req, res, next) => {
  res.send('connection established');
};

const addTodo = async (req, res, next) => {
  res.send('connection established');
};

const updateTodo = async (req, res, next) => {
  res.send('connection established');
};

const deleteTodo = async (req, res, next) => {
  res.send('connection established');
};

module.exports = { addTodo, getUserTodos, updateTodo, deleteTodo };
