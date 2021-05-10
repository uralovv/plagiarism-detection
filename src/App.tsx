import React from 'react';
import MainRouting from 'src/routers';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from '@reatom/core';
import { context } from '@reatom/react';

const store = createStore();

const App = () => {
  return (
      <React.Suspense fallback="Loading">
          <context.Provider value={store}>
        <div>
          <Router>
            <MainRouting/>
          </Router>
        </div>
          </context.Provider>
      </React.Suspense>
  );
};

export default App;
