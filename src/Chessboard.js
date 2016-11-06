import React, { Component } from 'react';

class Chessboard extends Component {
    render() {
      const chessboard = [];
      let currentRow = [];

      // generate checkerboard
      for (let row = 0; row < this.props.size; row++) {
        for(let column = 0; column < this.props.size; column++) {
          // if the column are both even or odd we add the class 'fill'
          currentRow.push(
            <td key={`${row},${column}`}
              className={row % 2 === column % 2 ? 'fill' : '' }></td>
          );
        }
        chessboard.push(<tr key={row}>{currentRow}</tr>);
        currentRow = []; // reset the row
      }

      return (
        <table className="chess">
          <tbody>
            {chessboard}
          </tbody>
        </table>
      );
    }
}

export default Chessboard;
