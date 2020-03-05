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

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBcB1EljfslStE-BXc_SNhC5o2AGTfcvG4",
  authDomain: "dbexcelsis.firebaseapp.com",
  databaseURL: "https://dbexcelsis.firebaseio.com",
  projectId: "dbexcelsis",
  storageBucket: "dbexcelsis.appspot.com",
  messagingSenderId: "636725916438",
  appId: "1:636725916438:web:663c24035d84314f50d637"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
