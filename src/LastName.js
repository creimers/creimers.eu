import React, { Component } from 'react';
import HoverLetter from './HoverLetter';


class LastName extends Component {
  render(){
    return(
      <div className='last-name'>
        {
          this.props.name.map((l, index) => {
            return (<HoverLetter key={index} letter={l}/>)
          })
        }
      </div>
    )
  }
}

export default LastName;
