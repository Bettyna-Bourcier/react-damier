import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
    render() {
      const board = this.context.getBoard();
      return (
        <div>
          {board}
        </div>
      );
    }
}

// we have to add contextTypes to retrieve the parent context
Board.contextTypes = {
  getBoard: React.PropTypes.func
};

export default Board;
