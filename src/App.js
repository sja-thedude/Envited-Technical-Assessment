import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import Create from './pages/Create';
import './styles/Home.css';

const App = () => (
  <main className="App">
    <Switch>
      <Route path="/Event">
        <Event />
      </Route>
      <Route path="/Create">
        <Create />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </main>
);

export default App;
