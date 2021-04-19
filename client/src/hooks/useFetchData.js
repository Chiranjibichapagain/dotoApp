import { useState, useEffect } from 'react';
import { getUser } from '../services/user';

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [log, setLog] = useState(true);

  const logout = () => {
    setLog(false);
    localStorage.removeItem('todo-app');
  };

  useEffect(() => {
    const userData = localStorage.getItem('todo-app');
    setUser(JSON.parse(userData));
  }, [log]);

  return [user, logout];
};

export const useTodos = (status) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const LS = JSON.parse(localStorage.getItem('todo-app'));
    const userID = LS && LS.userInfo.userId;
    const fetchData = () => {
      getUser(userID).then((response) => {
        setTodos(response.data.todos);
      });
    };
    fetchData();
  }, [status]);

  return [todos];
};
