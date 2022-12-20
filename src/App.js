import React, { Component } from "react";
import Cell from "./components/Cell";
import "./style.css";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      whoTurn: true,
      values: [null, null, null, null, null, null, null, null, null],
      slots: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
      ],
      whoIsWin: "",
    };

    this.changeTurn = this.changeTurn.bind(this);
    this.writeValue = this.writeValue.bind(this);
  }

  changeTurn() {
    this.setState((state) => ({
      whoTurn: !this.state.whoTurn,
    }));
  }

  writeValue(index, value) {
    const values = [...this.state.values];
    values[index] = value;
    this.setState((state) => ({
      values,
    }));
  }

  render() {
    if (!this.state.whoIsWin) {
      for (const [a, b, c] of this.state.slots) {
        if (
          this.state.values[a] != null &&
          this.state.values[a] == this.state.values[b] &&
          this.state.values[b] == this.state.values[c]
        ) {
          const whoIsWin = `Winner is => ${this.state.values[a]}`;
          this.setState((state) => ({
            whoIsWin,
          }));
        }
      }
    }

    return (
      <>
        <h1 className="title">{this.state.whoIsWin}</h1>
        <div className="container">
          <Cell
            value={this.state.whoTurn ? "X" : "O"}
            onClick={() => {
              this.changeTurn();
              const value = this.state.whoTurn ? "X" : "O";
              this.writeValue(0, value);
            }}
            isGameEnd={this.state.whoIsWin}
          />
          <Cell
            value={this.state.whoTurn ? "X" : "O"}
            onClick={() => {
              this.changeTurn();
              const value = this.state.whoTurn ? "X" : "O";
              this.writeValue(1, value);
            }}
            isGameEnd={this.state.whoIsWin}
          />
          <Cell
            value={this.state.whoTurn ? "X" : "O"}
            onClick={() => {
              this.changeTurn();
              const value = this.state.whoTurn ? "X" : "O";
              this.writeValue(2, value);
            }}
            isGameEnd={this.state.whoIsWin}
          />
          <Cell
            value={this.state.whoTurn ? "X" : "O"}
            onClick={() => {
              this.changeTurn();
              const value = this.state.whoTurn ? "X" : "O";
              this.writeValue(3, value);
            }}
            isGameEnd={this.state.whoIsWin}
          />
          <Cell
            value={this.state.whoTurn ? "X" : "O"}
            onClick={() => {
              this.changeTurn();
              const value = this.state.whoTurn ? "X" : "O";
              this.writeValue(4, value);
            }}
            isGameEnd={this.state.whoIsWin}
          />
          <Cell
            value={this.state.whoTurn ? "X" : "O"}
            onClick={() => {
              this.changeTurn();
              const value = this.state.whoTurn ? "X" : "O";
              this.writeValue(5, value);
            }}
            isGameEnd={this.state.whoIsWin}
          />
          <Cell
            value={this.state.whoTurn ? "X" : "O"}
            onClick={() => {
              this.changeTurn();
              const value = this.state.whoTurn ? "X" : "O";
              this.writeValue(6, value);
            }}
            isGameEnd={this.state.whoIsWin}
          />
          <Cell
            value={this.state.whoTurn ? "X" : "O"}
            onClick={() => {
              this.changeTurn();
              const value = this.state.whoTurn ? "X" : "O";
              this.writeValue(7, value);
            }}
            isGameEnd={this.state.whoIsWin}
          />
          <Cell
            value={this.state.whoTurn ? "X" : "O"}
            onClick={() => {
              this.changeTurn();
              const value = this.state.whoTurn ? "X" : "O";
              this.writeValue(8, value);
            }}
            isGameEnd={this.state.whoIsWin}
          />
        </div>
      </>
    );
  }
}

export default App;
