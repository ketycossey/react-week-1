import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  addOne = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  minusOne = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div className="counterBox">
        <button className="addOne" onClick={this.addOne}>
          <h2> +1</h2>
        </button>
        <h1 className="starter">{this.state.counter} </h1>
        <button className="minusOne" onClick={this.minusOne}>
          <h2>-1</h2>
        </button>
      </div>
    );
  }
}
export default Counter;
