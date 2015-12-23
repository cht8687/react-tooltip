import React, { Component } from 'react';
import { render } from 'react-dom';
import Tooltip from '..';

class App extends Component {

  render() {

    return (
      <div>
        <Tooltip 
        />
      </div>
    );
  }
}

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
  