import React, { Component } from 'react'
import { render } from 'react-dom'
import Tooltip from '..'

const optionsRight = {
  direction: 'Right',
  followCursor: false,
  shiftX: 20,
  shiftY: 0
}

const optionsTop = {
  direction: 'Top',
  followCursor: false,
  shiftX: 20,
  shiftY: 0
}

const tooltip1 = {
  hoverComponent: 'I am the awesome tooltip 1!',
  trigger: 'awesome tooltip1'
};

const tooltip2 = {
  hoverComponent: 'I am the awesome tooltip 2!',
  trigger: 'awesome tooltip2'
};  

const tooltip1styles = {
  trigger: {
    background: 'rgb(142, 147, 247)',
    width: '200px',
    marginLeft: '5px'
  },

  hoverComponent: {
    height: '25px',
    overflowY: 'auto',
    width: '300px',
    background: '#cccccc',
    display: 'none',
    position: 'absolute'
  }
};

const tooltip2styles = {
  trigger: {
    background: 'rgb(58, 98, 247)',
    width: '250px',
    marginLeft: '5px'
  },

  hoverComponent: {
    height: '25px',
    overflowY: 'auto',
    width: '250px',
    borderRadius: '15px',
    background: 'rgb(216, 226, 99)',
    display: 'none',
    position: 'absolute',
    padding: '5px'
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <div style={{marginTop: '100px'}}>
        	React tooltip is 
          <Tooltip 
          	options={optionsRight}
          	tooltipComponent={tooltip1}
          	styles={tooltip1styles}
          />
        </div>
        <pre>

        </pre>
        <div style={{marginTop: '100px'}}>
          React tooltip is 
          <Tooltip 
            options={optionsTop}
            tooltipComponent={tooltip2}
            styles={tooltip2styles}
          />
        </div>
      </div>
    )
  }
}

const appRoot = document.createElement('div')
appRoot.id = 'app'
document.body.appendChild(appRoot)
render(<App />, appRoot)
  