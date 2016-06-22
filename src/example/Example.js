import React, { Component } from 'react'
import { render } from 'react-dom'
import Tooltip from '..'

const options = {
	direction: 'right',
  offsetX: '10',
  offsetY: '10',
 	backgroundColor: '#CCCCCC'
}

const tooltip1 = {
  hoverComponent: 'I am the awesome tooltip!',
  trigger: 'awesome'
};

const styles = {
  trigger: {
    background: '#E0037E',
    width: '80px'
  },

  hoverComponent: {
    height: '25px',
    overflowY: 'auto',
    outline: '1px solid blue',
    width: '300px',
    background: '#E8E27E',
    display: 'none',
    position: 'absolute'
  }
};


class App extends Component {

  render() {

    return (
      <div>
      	React tooltip is 
        <Tooltip 
        	options={options}
        	tooltipComponent={tooltip1}
        	styles={styles}
        />
      </div>
    )
  }
}

const appRoot = document.createElement('div')
appRoot.id = 'app'
document.body.appendChild(appRoot)

render(<App />, appRoot)
  