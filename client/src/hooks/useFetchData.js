import { useState, useEffect } from 'react';

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
