const userRouter = require('express').Router();
const { registerUser, logUser, getUser } = require('../controllers/user');

userRouter.post('/register', registerUser);
userRouter.post('/login', logUser);
userRouter.get('/:userId', getUser);

module.exports = userRouter;
