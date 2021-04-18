const todoRouter = require('express').Router();
const { isAuthenticated } = require('../helpers/middlewares');

const { addTodo, updateTodo, deleteTodo } = require('../controllers/todo');

todoRouter.post('/', isAuthenticated, addTodo);
todoRouter.put('/:todoId', isAuthenticated, updateTodo);

todoRouter.delete('/:todoId', isAuthenticated, deleteTodo);

module.exports = todoRouter;
