import React, { Component } from 'react';
import BoxTutorial from './BoxTutorial';
import StyleTutorial from './StyleTutorial';
import GridTutorial1 from './GridTutorial1';
import ColorThemeTutorial from './ColorThemeTutorial';
import TabTutorial from './TabTutorial';

class Main extends Component {
  render() {
    return (
      <div styles={{ padding: '20px' }}>
        {/* <BoxTutorial /> */}
        {/* <StyleTutorial /> */}
        {/* <GridTutorial1 /> */}
        <ColorThemeTutorial />
        <TabTutorial />
      </div>
    );
  }
}
export default Main;