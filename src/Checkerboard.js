import React, { Component } from 'react';
import './Checkerboard.css';


class Checkerboard extends Component {
    render() {
      const checkerboard = [];
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
        checkerboard.push(<tr key={row}>{currentRow}</tr>);
        currentRow = []; // reset the row
      }

      return (
        <table>
          <tbody>
            {checkerboard}
          </tbody>
        </table>
      );
    }
}

export default Checkerboard;
