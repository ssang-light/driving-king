import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.9.0';

// pages for this product
import LandingPage from 'views/LandingPage/LandingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import Home from 'views/Home/Home.js';
import AnalysisPage from 'views/AnalysisPage/AnalysisPage.js';
import RankingPage from 'views/RankingPage/RankingPage.js';
import DifficultyPage from 'views/DifficultyPage/DifficultyPage.js';
import Components from 'views/Components/Components';
var hist = createBrowserHistory();

const API_KEY = process.env.REACT_APP_KAKAOMAP_API_KEY;
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}`;
document.head.append(script);

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/analysis" component={AnalysisPage} />
      <Route path="/ranking" component={RankingPage} />
      <Route path="/difficulty" component={DifficultyPage} />
      <Route path="/components" component={Components} />
      <Route path="/" exact={true} component={Home} />
    </Switch>
  </Router>,

  document.getElementById('root'),
);
