import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from './component/home/Home';
import Analysis from './component/analysis/Analysis';
import Ranking from './component/ranking/Ranking';
import Difficulty from './component/difficulty/Difficulty';
import Login from './component/login/Login';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={() => (
            <Fragment>
              <AppBar position="static">
                <Tabs>
                  <Tab label="운전왕" component={Link} to="/" />
                  <Tab label="운전 습관 분석" component={Link} to="/analysis" />
                  <Tab label="운전자 랭킹" component={Link} to="/ranking" />
                  <Tab
                    label="지역별 운전 난이도"
                    component={Link}
                    to="/difficulty"
                  />
                </Tabs>
              </AppBar>
              <Switch>
                <Route path="/" exact={true} render={() => <Home />} />
                <Route path="/analysis" render={() => <Analysis />} />
                <Route path="/ranking" render={() => <Ranking />} />
                <Route path="/difficulty" render={() => <Difficulty />} />
                <Route path="/login" render={() => <Login />} />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}
export default App;
