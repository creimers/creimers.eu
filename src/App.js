import React, { Component } from 'react';
import './App.css';
import LastName from './LastName';
import FirstName from './FirstName';

class App extends Component {
  render() {
    return (
      <div>
        <FirstName name={['c', 'h', 'r', 'i', 's', 't', 'o', 'p', 'h']} />
        <LastName name={['r', 'e', 'i', 'm', 'e', 'r', 's']} />
      </div>
    );
  }
}

export default App;
