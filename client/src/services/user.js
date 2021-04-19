import axios from 'axios';

const baseUrl = 'api/users';

export const registerUser = async (user) => {
  return await axios.post(`${baseUrl}/register`, user);
};

export const login = async (credentials) => {
  return await axios.post(`${baseUrl}/login`, credentials);
};

export const getUser = async (id) => {
  return await axios.get(`${baseUrl}/${id}`);
};
