import React, { Component } from 'react'
import { render } from 'react-dom'
import Tooltip from '..'
import { 
  optionsRight, 
  tooltip1styles, 
  tooltip1
} from './Options'
import './css.scss'
import TextareaAutosize from 'react-textarea-autosize'

class App extends Component {

  render() {
    return (
      <div>
        <div className='title-text'> rc-react-tooltip </div>
        <div className='options'> 
          <div className='title'>options</div>
          <div>
            <TextareaAutosize
              minRows={3}
              maxRows={6}
              defaultValue='code'
            />
          </div>
        </div>
        <div className='tooltip1'> 
          <div className='title'>tooltip1</div>
          <div>
             <TextareaAutosize
              minRows={3}
              maxRows={6}
              defaultValue='code'
            />
          </div>
        </div>
        <div className='styles'> 
          <div className='title'>tooltip1styles</div>
          <div>
             <TextareaAutosize
              minRows={3}
              maxRows={6}
              defaultValue='code'
            />
          </div>
        </div>
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
  