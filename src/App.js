import React, { Fragment, Component } from 'react';
import Analysis from './component/analysis/Analysis';
import Profile from './component/Profile';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Profile />
        <Analysis />
      </Fragment>
    );
  }
}
export default App;
