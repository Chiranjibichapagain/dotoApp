import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

import './Todo.scss';

const Todo = ({ data, handleComplete, handleDelete }) => {
  return (
    <div className="todo">
      <div className="todo__content">
        <h3 className="todo__title">{data.title}</h3>
        <p className="todo__description">{data.description}</p>
      </div>
      <div className="todo__action">
        <div onClick={handleComplete} aria-label="checkmark-button">
          <CheckCircleRoundedIcon
            fontSize="large"
            className={
              data.completed ? 'todo__icon' : 'todo__icon todo__icon--delete'
            }
          />
        </div>
        <div onClick={handleDelete} aria-label="delete-button">
          <DeleteRoundedIcon
            fontSize="large"
            className="todo__icon todo__icon--delete"
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
