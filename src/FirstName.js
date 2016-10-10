import React, { Component } from 'react';
import Letter from './Letter';
import ClickLetter from './ClickLetter';
import classNames from 'classnames';


class FirstName extends Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      hideLetters: true
    }

    this.animateFirstName = this.animateFirstName.bind(this);
  }

  animateFirstName(){
    this.setState({collapsed: !this.state.collapsed});

    let toggleLetters = () => {
      this.setState({hideLetters: !this.state.hideLetters});
    }
    if(this.state.collapsed) {
      setTimeout(toggleLetters, 500);
    }
    else {
      toggleLetters();
    }
  }

  render(){
    let classes = classNames('first-name', {
      collapsed: this.state.collapsed,
      open: !this.state.collapsed
    });

    return(
      <div className={classes}>
        <ClickLetter letter={this.props.name[0]} onLetterClick={this.animateFirstName}/>
        {
          this.props.name.slice(1).map((l, index) => {
            return (<Letter key={index} letter={l} hidden={this.state.hideLetters}/>)
          })
        }
      </div>
    )
  }
}

export default FirstName;
