import React, { Component } from 'react';
import Square from './Square.js'

class GameBoard extends Component {
  render() {
      return (
        <div>
          <div className="row">
            <Square id="1" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} winner={this.props.winner} />
            <Square id="2" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} winner={this.props.winner} />
            <Square id="3" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} winner={this.props.winner} />
          </div>
          <div className="row">
            <Square id="4" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} winner={this.props.winner} />
            <Square id="5" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} winner={this.props.winner} />
            <Square id="6" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} winner={this.props.winner} />
          </div>
          <div className="row">
            <Square id="7" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} winner={this.props.winner} />
            <Square id="8" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} winner={this.props.winner} />
            <Square id="9" squarePlayed={this.props.squarePlayed} currentPlayer={this.props.currentPlayer} winner={this.props.winner} />
          </div>
        </div>
      )
  }
}

export default GameBoard;