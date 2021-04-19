import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

import Header from '../../components/Header';
import Todo from '../../components/Todo';
import Button from '../../components/Btn';
import Input from '../../components/Input';
import { useForm } from '../../hooks/useForm';
import { useTodos } from '../../hooks/useFetchData';

import './Homepage.scss';
import { addTodo, updateTodo, deleteTodo } from '../../services/todo';

Modal.setAppElement('#root');
const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [token, setToken] = useState('');
  const [todos] = useTodos(status);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('todo-app')).token;
    setToken(token);
  }, []);

  const customStyles = {
    content: {
      background: '#f2f2f2',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [fields, setFields] = useForm({
    title: '',
    description: '',
  });

  const { title, description } = fields;

  const handleComplete = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const update = { completed: todo.completed ? 'false' : 'true' };
    const config = { headers: { authorization: `bearer ${token}` } };
    updateTodo(update, id, config).then((response) => {
      if (response.data) {
        setStatus('updated');
        setTimeout(() => {
          setStatus('');
        }, 500);
      }
    });
  };
  const handleDelete = (id) => {
    const config = { headers: { authorization: `bearer ${token}` } };
    deleteTodo(id, config).then((response) => {
      if (response.data) {
        setStatus('deleted');
      }
    });
  };

  const handleCreateTodo = () => {
    if (!(title && description)) {
      setError('All fields are required');
    } else {
      const todo = { title, description };
      const config = { headers: { authorization: `bearer ${token}` } };
      addTodo(todo, config)
        .then((response) => {
          if (response.data) {
            setIsModalOpen(false);
            setStatus('created');
          }
        })
        .catch((error) => {
          setError(error.response.data.Error);
        });
    }
  };

  return (
    <div className="homepage">
      <Header />
      <h1 className="homepage__heading">MY TODOs</h1>
      <div className="homepage__todos">
        {todos.length > 0 &&
          todos.map((todo) => (
            <Todo
              key={todo.id}
              handleComplete={() => handleComplete(todo.id)}
              handleDelete={() => handleDelete(todo.id)}
              data={todo}
            />
          ))}
        {todos.length === 0 && (
          <div className="homepage__no-todo">
            No todo to show! Start by creating one.
          </div>
        )}
        <div
          onClick={() => setIsModalOpen(true)}
          className="homepage__add-todo"
        >
          <AddCircleRoundedIcon fontSize="inherit" />
        </div>
      </div>
      <Modal isOpen={isModalOpen} style={customStyles}>
        <div onClick={() => setIsModalOpen(false)} className="close">
          X
        </div>
        <div className="add-modal">
          <h2 className="add-modal__title">CREATE A TODO EVENT</h2>
          <form className="add-modal__form">
            <Input
              error={error ? true : false}
              type="text"
              label="Title"
              setValue={setFields}
              id="title"
              value={title}
            />
            <Input
              error={error ? true : false}
              type="text"
              label="Description"
              setValue={setFields}
              id="description"
              value={description}
              helperText={error}
            />
            <div className="add-modal__btn-div">
              <Button handleClick={handleCreateTodo} text="Create" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Homepage;
