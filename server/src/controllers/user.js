const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const User = require('../model/user');
const { SECRET } = require('../utils/config');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exist in the DB
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      throw new Error('User account with the given email already exists');
    } else {
      // password hash
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = { name, email, password: hashedPassword };
      const savedUser = await new User(newUser).save();

      if (savedUser) {
        res.status(200).send(savedUser);
      } else {
        throw new Error('Failed to create an user account');
      }
    }
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const logUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check  user and password
    const user = await User.findOne({ email: email });
    const correctPassword = !user
      ? null
      : await bcrypt.compare(password, user.password);

    if (!(user && correctPassword)) {
      throw new Error(`Email and Password didn't match!`);
    } else {
      const userInfo = {
        name: user.name,
        email: user.email,
        userId: user.id,
      };

      // generate token
      const token = await JWT.sign(userInfo, SECRET);
      if (token) {
        res.status(200).send({ token, userInfo });
      } else {
        throw new Error('Failed to login');
      }
    }
  } catch (error) {
    res.json({ Error: error.message });
  }
};

module.exports = { registerUser, logUser };
