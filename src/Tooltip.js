import React, { Component } from 'react';
import ReactHover from 'react-hover';
import * as componentHtml from './lib/componentHtml';
import * as styles from './lib/styles';

export default class Tooltip extends Component {
  static propTypes = {
    
  }

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {

    return (
      <span>
        <ReactHover
          styles={styles.styles}
          componentHtml={componentHtml.componentHtml}
        />
      </span>
    );
  }
}
