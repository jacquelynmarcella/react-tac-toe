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
    if (this.state.color !== 'gamesquare unplayed' || this.props.winner) {
      console.log('You cannot play this space');
    } 
    else {
      this.setState({
        value: this.props.currentPlayer,
        color: 'gamesquare player' + this.props.currentPlayer
      })
    // Run code in main App component to track squares, then check for win
      this.props.squarePlayed({
        player: this.props.currentPlayer,
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
