import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { makepuzzle, solvepuzzle } from "sudoku";



var puzzle = makepuzzle();

function Square(props) {
  return (
    <input
        type="text" 
        maxLength="1"
        value={props.value} 
        className="square"
        readOnly= {props.value != null}     

     >
      </input>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.solve = this.solve.bind(this);

    this.state = {
      squares: puzzle,
    };

  }

  solve(){
    const squares = this.state.squares;
     
    squares[1] = solvepuzzle(squares)[1];
    squares[2] = solvepuzzle(squares)[2];
    squares[3] = solvepuzzle(squares)[3];
    squares[4] = solvepuzzle(squares)[4];
    squares[5] = solvepuzzle(squares)[5];
    squares[6] = solvepuzzle(squares)[6];
    squares[7] = solvepuzzle(squares)[7];
    squares[8] = solvepuzzle(squares)[8];
    squares[9] = solvepuzzle(squares)[9];
    squares[10] = solvepuzzle(squares)[10];
    squares[11] = solvepuzzle(squares)[11];
    squares[12] = solvepuzzle(squares)[12];
    squares[13] = solvepuzzle(squares)[13];
    squares[14] = solvepuzzle(squares)[14];
    squares[15] = solvepuzzle(squares)[15];
    squares[16] = solvepuzzle(squares)[16];
    squares[17] = solvepuzzle(squares)[17];
    squares[18] = solvepuzzle(squares)[18];
    squares[19] = solvepuzzle(squares)[19];
    squares[20] = solvepuzzle(squares)[20];
    squares[21] = solvepuzzle(squares)[21];
    squares[22] = solvepuzzle(squares)[22];
    squares[23] = solvepuzzle(squares)[23];
    squares[24] = solvepuzzle(squares)[24];
    squares[25] = solvepuzzle(squares)[25];
    squares[26] = solvepuzzle(squares)[26];
    squares[27] = solvepuzzle(squares)[27];
    squares[28] = solvepuzzle(squares)[28];
    squares[29] = solvepuzzle(squares)[29];
    squares[30] = solvepuzzle(squares)[30];
    squares[31] = solvepuzzle(squares)[31];
    squares[32] = solvepuzzle(squares)[32];
    squares[33] = solvepuzzle(squares)[33];
    squares[34] = solvepuzzle(squares)[34];
    squares[35] = solvepuzzle(squares)[35];
    squares[36] = solvepuzzle(squares)[36];
    squares[37] = solvepuzzle(squares)[37];
    squares[38] = solvepuzzle(squares)[38];
    squares[39] = solvepuzzle(squares)[39];
    squares[40] = solvepuzzle(squares)[40];
    squares[41] = solvepuzzle(squares)[41];
    squares[42] = solvepuzzle(squares)[42];
    squares[43] = solvepuzzle(squares)[43];
    squares[44] = solvepuzzle(squares)[44];
    squares[45] = solvepuzzle(squares)[45];
    squares[46] = solvepuzzle(squares)[46];
    squares[47] = solvepuzzle(squares)[47];
    squares[48] = solvepuzzle(squares)[48];
    squares[49] = solvepuzzle(squares)[49];
    squares[50] = solvepuzzle(squares)[50];
    squares[51] = solvepuzzle(squares)[51];
    squares[52] = solvepuzzle(squares)[52];
    squares[53] = solvepuzzle(squares)[53];
    squares[54] = solvepuzzle(squares)[54];
    squares[55] = solvepuzzle(squares)[55];
    squares[56] = solvepuzzle(squares)[56];
    squares[57] = solvepuzzle(squares)[57];
    squares[58] = solvepuzzle(squares)[58];
    squares[59] = solvepuzzle(squares)[59];
    squares[60] = solvepuzzle(squares)[60];
    squares[61] = solvepuzzle(squares)[61];
    squares[62] = solvepuzzle(squares)[62];
    squares[63] = solvepuzzle(squares)[63];
    squares[64] = solvepuzzle(squares)[64];
    squares[65] = solvepuzzle(squares)[65];
    squares[66] = solvepuzzle(squares)[66];
    squares[67] = solvepuzzle(squares)[67];
    squares[68] = solvepuzzle(squares)[68];
    squares[69] = solvepuzzle(squares)[69];
    squares[70] = solvepuzzle(squares)[70];
    squares[71] = solvepuzzle(squares)[71];
    squares[72] = solvepuzzle(squares)[72];
    squares[73] = solvepuzzle(squares)[73];
    squares[74] = solvepuzzle(squares)[74];
    squares[75] = solvepuzzle(squares)[75];
    squares[76] = solvepuzzle(squares)[76];
    squares[77] = solvepuzzle(squares)[77];
    squares[78] = solvepuzzle(squares)[78];
    squares[79] = solvepuzzle(squares)[79];
    squares[80] = solvepuzzle(squares)[80];
    squares[0] = null;
    

    //console.log(this.state.squares)
    this.setState({squares: squares})
    }
  
  handleChange = i => event => {
    if (event === '1'){
      console.log(i);
    }

    //console.log(solvepuzzle(this.state.squares));
    const squares = this.state.squares
    
    if (calculateWinner(squares) ){
      return
    } 
    this.state.squares[i] = event.target.value;
    this.setState({squares: this.state.squares})
    //console.log(i);
    //console.log(event.target.value);
    //console.log(this.state.squares);

  }

  renderSquare(i) {
    //console.log(this.state.squares);
    //console.log(solvepuzzle(this.state.squares));
    //const hint = this.state.squares[i] != null;
    const hintstyle = {
      background: '#9d9dff'
    }
    return (

      <Square
        className="hint"
        value={this.state.squares[i]}
        onChange={this.handleChange(i)} 
        //readOnly= {this.state.squares[i] != null}     
      />
      
      /*<input
        type="text" 
        maxLength="1"
        value={this.state.squares[i]} 
        className="square"
        contentEditable={this.state.squares[i] != null}
        //readOnly= {this.state.squares[i] != null}
        onChange={this.handleChange(i)} 
      >
      </input>
      */
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
          <button className = 'solvePuzzle'  onClick={this.solve} >Complete Most of Puzzle </button>
        </div>
      );
    }
  }
  
  class Game extends React.Component {

    render() {

      //const solve = this.setState({squares: solvepuzzle(this.state.squares)})

      const winner = calculateWinner();
      let status;
      if (winner){
        status = "Complete"
      } else{
        status = "Not Complete... ";
      }
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
  
  function calculateWinner(squares) {
    for (var i = 0; i < squares; i++) {
    if (squares[i] == null ){
      return null
    } 
    return squares;
    
  }}
