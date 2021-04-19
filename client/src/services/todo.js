import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/todos';

export const addTodo = async (todo) => {
  return await axios.post(baseUrl, todo);
};

export const updateTodo = async (updates, id) => {
  return await axios.put(`${baseUrl}/${id}`, updates);
};

export const deleteTodo = async (id) => {
  return await axios.delete(`${baseUrl}/${id}`);
};
