import React, { Component } from 'react';
import './App.css';
import LastName from './LastName';

class App extends Component {
  render() {
    return (
      <div>
        <LastName name={['r', 'e', 'i', 'm', 'e', 'r', 's']} />
      </div>
    );
  }
}

export default App;
