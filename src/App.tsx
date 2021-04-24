import React from 'react';
import MainRouting from 'src/routers';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
      <React.Suspense fallback="Loading">
        <div>
          <Router>
            <MainRouting/>
          </Router>
        </div>
      </React.Suspense>
  );
};

export default App;
