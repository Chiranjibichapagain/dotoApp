import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import Homepage from './pages/Homepage';

const Routes = ({ setLog }) => (
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route exact path="/todos" component={Homepage} />
  </Switch>
);

export default Routes;
