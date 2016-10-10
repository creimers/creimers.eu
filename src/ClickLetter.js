import React, { Component } from 'react';


class ClickLetter extends Component {

  render(){
    return(
      <div className="click-letter" onClick={this.props.onLetterClick}>{this.props.letter}</div>
    )
  }
}

export default ClickLetter;
