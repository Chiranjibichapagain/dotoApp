const todoRouter = require('express').Router();

const {
  getUserTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todo');

todoRouter.get('/:userId', getUserTodos);
todoRouter.post('/', addTodo);
todoRouter.put('./:todoId', updateTodo);
todoRouter.delete('./:todoId', deleteTodo);

module.exports = todoRouter;
