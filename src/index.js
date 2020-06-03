import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Ranking from './pages/Ranking';
import Difficulty from './pages/Difficulty';
import Login from './pages/Login';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/analysis" component={Analysis} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/difficulty" component={Difficulty} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
