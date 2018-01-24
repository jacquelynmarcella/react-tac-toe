import React, { Component } from 'react';
import GameBoard from './GameBoard.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: 'X',
      status: 'Player X starts',
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: false
    }
  }

  squarePlayed = (data) => {
    let squares = this.state.squares;
    let squareId = parseInt(data.square - 1);
    squares[squareId] = data.player;
    this.checkWin(this.state.player, squares);
  }

  checkWin = (player, squares) => {
    if ((squares[0] === player && squares[1] === player && squares[2] === player) || 
        (squares[3] === player && squares[4] === player && squares[5] === player) ||
        (squares[6] === player && squares[7] === player && squares[8] === player) ||
        (squares[0] === player && squares[3] === player && squares[6] === player) ||
        (squares[1] === player && squares[4] === player && squares[7] === player) ||
        (squares[2] === player && squares[5] === player && squares[8] === player) ||
        (squares[0] === player && squares[4] === player && squares[8] === player) ||
        (squares[2] === player && squares[4] === player && squares[6] === player)) {
          this.setState({
            status: 'Player ' + player + ' wins!',
            winner: true
          });
    }
    else if (!squares.includes(0)) {
      this.setState({
        status: 'There was a draw'
      });
    }
    else {
      this.changeTurn(player, squares);
    }
  }

  changeTurn = (player, squares) => {
    if(player === 'X'){
      this.setState({
        player: 'O',
        squares: squares,
        status: 'Your turn O'
      })
    }
    else if(player === 'O') {
      this.setState({
        player: 'X',    
        squares: squares,
        status: 'Your move X'
      })
    }
  }

  render() {
    if(this.state.winner){
      return (
      <div>
        <h1>TIC TAC TOE</h1>
        <div className="gameBoard">
          <p>{this.state.status}</p>
        </div>
      </div>
    );        
    }
    else {
      return (
        <div>
          <h1>TIC TAC TOE</h1>
          <div className="gameBoard">
            <p>{this.state.status}</p>
            <GameBoard squarePlayed={this.squarePlayed} currentPlayer={this.state.player} />
        </div>
      </div>
      );
    }
  }
}

export default App;
