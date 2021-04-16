import React from 'react';

import Routes from './routes';

import './app.scss';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
