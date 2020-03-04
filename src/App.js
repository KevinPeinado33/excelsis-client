import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/login/Login';
import Home from './Home';
import Main from './components/panel/Main';
import NotFound from './components/error404/NotFound';
import Bandeja from './components/bandeja/Bandeja';
import Publicaciones from './components/publicacion/Publicacion';
import NoticiasComponent from './components/noticias/NoticiasComponent';
import Configuracion from './components/configuracion/Configuracion';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/menu' component={Main} />
        <Route exact path='/bandeja' component={Bandeja} />
        <Route exact path='/publicaciones' component={Publicaciones} />
        <Route exact path='/noticias' component={NoticiasComponent} />
        <Route exact path='/configuracion' component={Configuracion} />
        <Route exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
