import React, { Component } from 'react';
import classNames from 'classnames';
import './Letter.css';


class Letter extends Component {
  render() {
    let classes = classNames('letter', {
      hidden: this.props.hidden,
    });
    return (
      <div className={classes}>{this.props.letter}</div>
    )
  }
}

export default Letter;
