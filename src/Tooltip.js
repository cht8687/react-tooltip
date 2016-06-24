import React, { Component, PropTypes } from 'react'
import ReactHover from 'react-hover'
import { initDirection } from './lib/option'

export default class Tooltip extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    tooltipComponent: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired,
  }

  render() {
    let { options, tooltipComponent, styles } = this.props
    Object.assign(styles.hoverComponent, initDirection(options.direction))
    return (
      <span style={{ position: 'relative', display: 'inline-block'}}>
        <ReactHover
          styles={styles}
          componentHtml={tooltipComponent}
          options={options}
        />
      </span>
    );
  }
}
