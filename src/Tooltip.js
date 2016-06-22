import React, { Component, PropTypes } from 'react';
import ReactHover from 'react-hover';

export default class Tooltip extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    tooltipComponent: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const { options, tooltipComponent, styles } = this.props;

    return (
      <span>
        <ReactHover
          styles={styles}
          componentHtml={tooltipComponent}
          options={options}
        />
      </span>
    );
  }
}
