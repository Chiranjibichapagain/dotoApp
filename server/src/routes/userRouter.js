const userRouter = require('express').Router();
const { registerUser, logUser } = require('../controllers/user');

userRouter.post('/register', registerUser);
userRouter.post('/login', logUser);

module.exports = userRouter;
