import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/todos';

export const addTodo = async (todo, config) => {
  console.log('test', todo);
  return await axios.post(baseUrl, todo, config);
};

export const updateTodo = async (updates, id, config) => {
  return await axios.put(`${baseUrl}/${id}`, updates, config);
};

export const deleteTodo = async (id, config) => {
  return await axios.delete(`${baseUrl}/${id}`, config);
};
