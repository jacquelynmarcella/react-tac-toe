import React, { Component } from 'react';
import './App.css';


// Render 9 squares
// Event listeners on each square 
// When clicked 

class Square extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      color: 'gamesquare unplayed'
    }
  }
  changeSquare = () => {
    // Change square class locally
    let currentPlayer = this.props.currentPlayer;

    if (this.state.color !== 'gamesquare unplayed') {
      console.log('This space has been played');
    } 
    else {
      this.setState({
        value: currentPlayer,
        color: 'gamesquare player' + currentPlayer
      })
    // Run code in main App component to keep track of squares played
      this.props.squarePlayed({
        player: currentPlayer,
        square: this.props.id
      });
    }
  }
  render() {
    return (
      <div className={this.state.color} id={this.props.id} onClick={this.changeSquare}>
        {this.state.value}
      </div>
    )
  }
}

class GameBoard extends Component {
  render() {
      return (
        <div>
          <div className="row">
            <Square id="1" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} />
            <Square id="2" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} />
            <Square id="3" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} />
          </div>
          <div className="row">
            <Square id="4" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} />
            <Square id="5" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} />
            <Square id="6" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} />
          </div>
          <div className="row">
            <Square id="7" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} />
            <Square id="8" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} />
            <Square id="9" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} />
          </div>
        </div>
      )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: 'X',
      status: 'Player X starts',
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0]
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
            status: 'Player ' + player + ' wins!'
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

export default App;
