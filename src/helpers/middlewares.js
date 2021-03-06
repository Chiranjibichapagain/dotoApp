const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/config');

// Function to extract the token from the request and return the decoded value from the token
const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    const token = authorization.substring(7);
    const decodedToken = jwt.verify(token, SECRET);
    return decodedToken;
  } else {
    response.status(401).send('excess denied');
  }
  next();
};

// Authentication middleware that protects routes from being accessed form unauthorized requests
const isAuthenticated = async (req, res, next) => {
  const token = req.get('authorization');
  if (!token) return res.status(401).send('excess denied');
  try {
    const cleanToken = token.substring(7);
    const verified = await jwt.verify(cleanToken, SECRET);
    if (verified) {
      return next();
    }
  } catch (error) {
    res.status(400).send('Token not found or invalid token');
  }
};

module.exports = { tokenExtractor, isAuthenticated };
