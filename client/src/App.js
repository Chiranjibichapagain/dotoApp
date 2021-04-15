import React from 'react';

import Button from './components/Button';
import './app.scss';

function App() {
  const submit = () => {
    console.log('pressed');
  };
  return (
    <div className="app">
      <h1>Welcome to the app</h1>
      <Button modifier="active" text="Register" handleClick={submit} />
      <Button
        modifier="disabled"
        disabled={true}
        text="Register"
        handleClick={submit}
      />
    </div>
  );
}

export default App;
