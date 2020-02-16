import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/login/Login';
import Home from './Home';
import Pruebis from './components/panel/Pruebis';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/panel' component={Pruebis} />
      </Switch>
    </Router>
  );
}

export default App;
