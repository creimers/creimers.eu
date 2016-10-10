import React, { Component } from 'react';


class HoverLetter extends Component {
  constructor() {
    super()

    this.state = {
      color: '#000000'
    }
    this.colors = ['#f00000', '#aeaeae', '#023a9c', '#009688'];

    this.changeColor = this.changeColor.bind(this);
    this.resetColor = this.resetColor.bind(this);
  }

  changeColor() {
    let color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.setState({color: color});
  }

  resetColor() {
    this.setState({color: '#000000'});
  }

  render() {
    return (
      <div className="hover-letter" style={this.state} onMouseOver={this.changeColor} onMouseOut={this.resetColor}>{this.props.letter}</div>
    )
  }
}

export default HoverLetter;
