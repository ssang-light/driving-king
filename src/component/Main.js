import React, { Component } from 'react';
import BoxTutorial from './BoxTutorial';
import StyleTutorial from './StyleTutorial';
import GridTutorial1 from './GridTutorial1';

class Main extends Component {
  render() {
    return (
      <div styles={{ padding: '20px' }}>
        {/* <BoxTutorial /> */}
        {/* <StyleTutorial /> */}
        <GridTutorial1 />
      </div>
    );
  }
}
export default Main;
