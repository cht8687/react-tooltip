import React, { Component } from 'react'
import { render } from 'react-dom'
import Tooltip from '..'

const options = {
  direction: 'Right',
  followCursor: false,
  shiftX: 20,
  shiftY: 0
}

const tooltip1 = {
  hoverComponent: 'I am the awesome tooltip!',
  trigger: 'awesome'
};

const styles = {
  trigger: {
    background: 'rgb(142, 147, 247)',
    width: '80px',
    marginLeft: '5px'
  },

  hoverComponent: {
    height: '25px',
    overflowY: 'auto',
    outline: '1px solid blue',
    width: '300px',
    background: '#cccccc',
    display: 'none',
    position: 'absolute'
  }
};

class App extends Component {

  render() {

    return (
      <div>
        <div style={{marginTop: '100px'}}>
        	React tooltip is 
          <Tooltip 
          	options={options}
          	tooltipComponent={tooltip1}
          	styles={styles}
          />
        </div>

         <div style={{marginTop: '100px'}}>
          React tooltip is 
          <Tooltip 
            options={options}
            tooltipComponent={tooltip1}
            styles={styles}
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
  