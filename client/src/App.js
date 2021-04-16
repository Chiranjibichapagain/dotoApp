import React from 'react';

import './app.scss';
import Input from './components/Input';

function App() {
  return (
    <div className="app">
      <Input label="password" type="password" />
      {/* <Input helperText="Fix this" error="error" label="Text" type="text" /> */}
    </div>
  );
}

export default App;
