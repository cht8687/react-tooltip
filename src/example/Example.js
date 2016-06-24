import React, { Component } from 'react'
import { render } from 'react-dom'
import Tooltip from '..'
import { optionsRight, optionsTop, tooltip1styles, tooltip2styles } from './Options'

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
  