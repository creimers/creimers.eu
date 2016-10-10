import React, { Component } from 'react';
import LastName from './LastName';
import FirstName from './FirstName';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <FirstName name={['c', 'h', 'r', 'i', 's', 't', 'o', 'p', 'h']} />
        <LastName name={['r', 'e', 'i', 'm', 'e', 'r', 's']} />
      </div>
    );
  }
}

export default Header;
