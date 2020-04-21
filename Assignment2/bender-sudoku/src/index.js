import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { makepuzzle, solvepuzzle } from "sudoku";




var puzzle = makepuzzle()

class Board extends React.Component {
  constructor(props) {
    super(props);
    const squares = puzzle;
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      squares: squares,
    };
  }
  
  handleChange(event) {
    const squares = puzzle;
    const value = parseInt(event.target.value, 10);
    this.setState({squares: squares})
    console.log(this.state.squares);
  }

  renderSquare(i) {
    console.log(this.state.squares[i])
    
    return (
      <input
        type="text" 
        ref={this.textInput}
        value={this.state.squares[i]} 
        className="square"
        readOnly= {this.state.squares[i] != null}
        onChange={this.handleChange} 
      >
      </input>
    );
  }

  render() {
      return (
        <div>
          <div className="board-row" id = "row1">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row" id = "row2">
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
          </div>
          <div className="board-row" id = "row3">
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
          </div>
          <div className="board-row" id = "row4">
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
            {this.renderSquare(31)}
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            {this.renderSquare(35)}
          </div>
          <div className="board-row" id = "row5">
            {this.renderSquare(36)}
            {this.renderSquare(37)}
            {this.renderSquare(38)}
            {this.renderSquare(39)}
            {this.renderSquare(40)}
            {this.renderSquare(41)}
            {this.renderSquare(42)}
            {this.renderSquare(43)}
            {this.renderSquare(44)}
          </div>
          <div className="board-row" id = "row6">
            {this.renderSquare(45)}
            {this.renderSquare(46)}
            {this.renderSquare(47)}
            {this.renderSquare(48)}
            {this.renderSquare(49)}
            {this.renderSquare(50)}
            {this.renderSquare(51)}
            {this.renderSquare(52)}
            {this.renderSquare(53)}
          </div>
          <div className="board-row" id = "row7">
            {this.renderSquare(54)}
            {this.renderSquare(55)}
            {this.renderSquare(56)}
            {this.renderSquare(57)}
            {this.renderSquare(58)}
            {this.renderSquare(59)}
            {this.renderSquare(60)}
            {this.renderSquare(61)}
            {this.renderSquare(62)}
          </div>
          <div className="board-row" id = "row8">
            {this.renderSquare(63)}
            {this.renderSquare(64)}
            {this.renderSquare(65)}
            {this.renderSquare(66)}
            {this.renderSquare(67)}
            {this.renderSquare(68)}
            {this.renderSquare(69)}
            {this.renderSquare(70)}
            {this.renderSquare(71)}
          </div>
          <div className="board-row" id = "row9">
            {this.renderSquare(72)}
            {this.renderSquare(73)}
            {this.renderSquare(74)}
            {this.renderSquare(75)}
            {this.renderSquare(76)}
            {this.renderSquare(77)}
            {this.renderSquare(78)}
            {this.renderSquare(79)}
            {this.renderSquare(80)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {

    render() {
      let status;
        status = "Not Complete... ";

      return (
        <div className="game">
        <div className= "Title">
          <p>S</p>
          <p>U</p>
          <p>D</p> 
          <p>O</p>
          <p>K </p>
          <p>O </p>
        </div>
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          <button onClick={() => solvepuzzle()} >Complete Most of Puzzle </button>
          <p></p>
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
      );
    }
  }


  // ========================================
  
  ReactDOM.render(<Game />, document.getElementById("root"));
  /*
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  */