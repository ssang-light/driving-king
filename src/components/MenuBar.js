import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '../pages/Home';
import Analysis from '../pages/Analysis';
import Ranking from '../pages/Ranking';
import Difficulty from '../pages/Difficulty';
import Login from '../pages/Login';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

function MenuBar() {
  return (
    <div className="Menu-Bar">
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
          </Fragment>
        )}
      />
    </div>
  );
}

export default MenuBar;
