import React, { Component } from 'react';
import BoxTutorial from './BoxTutorial';
import StyleTutorial from './StyleTutorial';

class Main extends Component {
  render() {
    return (
      <div styles={{ padding: '20px' }}>
        {/* <BoxTutorial /> */}
        <StyleTutorial />
      </div>
    );
  }
}
export default Main;
