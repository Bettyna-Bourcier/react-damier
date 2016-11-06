import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkerboard from './Checkerboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Checkerboard</h2>
        </div>
        <Checkerboard size="10"/>
      </div>
    );
  }
}

export default App;
