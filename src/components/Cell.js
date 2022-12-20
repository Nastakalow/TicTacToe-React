import React, { Component } from "react";
import "../style.css";

export class Cell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "-",
    };
    this.clickCell = this.clickCell.bind(this);
  }

  clickCell() {
    if (this.props.isGameEnd) {
      return;
    }
    this.setState({
      value: this.props.value,
    });
    this.props.onClick();
  }

  render() {
    return (
      <div className="box" onClick={this.clickCell}>
        {this.state.value}
      </div>
    );
  }
}

export default Cell;
