import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <nav>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </div>
  );
};

export default App;
