import React, { Component } from 'react';

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

export default Square;
