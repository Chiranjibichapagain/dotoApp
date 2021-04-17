import React from 'react';

import Header from '../../components/Header';
import Todo from '../../components/Todo';

import './Homepage.scss';

const Homepage = () => {
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
      </div>
    </div>
  );
};

export default Homepage;
