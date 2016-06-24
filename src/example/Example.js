import React, { Component } from 'react'
import { render } from 'react-dom'
import Tooltip from '..'
import { 
  optionsRight, 
  tooltip1styles, 
  tooltip1
} from './Options'
import './css.scss'

class App extends Component {

  render() {
    return (
      <div>
        <div className='container'>
        	React tooltip is 
          <Tooltip 
          	options={optionsRight}
          	tooltipComponent={tooltip1}
          	styles={tooltip1styles}
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
  