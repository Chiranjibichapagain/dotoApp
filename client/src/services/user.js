import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/users';

export const registerUser = async (user) => {
  return await axios.post(`${baseUrl}/register`, user);
};

export const login = async ({ credentials }) => {
  return await axios.post(`${baseUrl}/login`, credentials);
};
