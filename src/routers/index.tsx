import * as React from 'react';
import {
    Switch,
    Route, BrowserRouter as Router,
} from 'react-router-dom';
import Index from 'src/pages/index';

function MainRouting() {
  return (
        <Router>
            <Switch>
              <Route exact path="/">
                  <Index />
              </Route>
            </Switch>
        </Router>
  );
}

export default MainRouting;
