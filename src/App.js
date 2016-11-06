import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkerboard from './Checkerboard.js';
import Chessboard from './Chessboard.js';
import Board from './Board.js';

let board = null;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { boardKey: null };
  }

  // we use the context to pass the Checkerboard or the Chessboard component to children
  getChildContext() {
    return { getBoard: function() {
      return board;
    }};
  }

  setBoard(boardComponent) {
    board = boardComponent;
    this.setState({ boardKey: Math.random() }); // to force the re-render of the Board component
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Checkerboard</h2>
        </div>
        <button type="button" className="CheckerboardBtn" onClick={() => this.setBoard(<Checkerboard size="10"/>)}>Damier</button>
        <button type="button" className="ChessBoardBtn" onClick={() => this.setBoard(<Chessboard size="8" />)}>Échiquier</button>
        <Board key={this.state.boardKey /* to force the re-render of the Board component */ }/> 
      </div>
    );
  }
}

// we have to add childContextTypes
App.childContextTypes = {
  getBoard: PropTypes.func
};

export default App;
