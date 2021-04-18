import React, { useState } from 'react';
import Modal from 'react-modal';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

import Header from '../../components/Header';
import Todo from '../../components/Todo';
import Button from '../../components/Btn';
import Input from '../../components/Input';
import { useForm } from '../../hooks/useForm';

import './Homepage.scss';

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dummyData = [
    {
      id: 'sadf8a86s7df',
      title: 'Go to school',
      description: 'Go to school at 10 and get back home at 17.',
      completed: false,
    },
    {
      id: 'sadf8a234gfddf',
      title: 'Go to Shopping',
      description: 'Go to shopping buy fruits, meat and whashing powder.',
      completed: true,
    },
    {
      id: 'sadfertuoop223df',
      title: 'Go to Hospital',
      description:
        'Go to Hospital for health checkup. The address is markkinatie 15. Be there at exactly at 9, no later no earlier!1',
      completed: false,
    },
  ];
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

  const handleComplete = () => {
    console.log('completed!');
  };
  const handleDelete = () => {
    console.log('deleted!');
  };

  return (
    <div className="homepage">
      <Header />
      <h1 className="homepage__heading">MY TODOs</h1>
      <div className="homepage__todos">
        {dummyData.map((todo) => (
          <Todo
            key={todo.id}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            data={todo}
          />
        ))}
        <div
          onClick={() => setIsModalOpen(true)}
          className="homepage__add-todo"
        >
          <AddCircleRoundedIcon fontSize="inherit" />
        </div>
      </div>
      <Modal
        appElement={document.getElementById('app')}
        isOpen={isModalOpen}
        style={customStyles}
      >
        <div onClick={() => setIsModalOpen(false)} className="close">
          X
        </div>
        <div className="add-modal">
          <h2 className="add-modal__title">CREATE A TODO EVENT</h2>
          <form className="add-modal__form">
            <Input
              type="text"
              label="Title"
              setValue={setFields}
              id="title"
              value={title}
            />
            <Input
              type="text"
              label="Description"
              setValue={setFields}
              id="description"
              value={description}
            />
            <div className="add-modal__btn-div">
              <Button text="Create" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Homepage;
