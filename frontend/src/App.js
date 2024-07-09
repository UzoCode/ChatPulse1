import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to ChatPulse</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default App;
