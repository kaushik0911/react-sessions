import React, { Component } from 'react';

class StateInClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState({count: this.state.count + 1})
  }

  decreaseCount = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        <h1>The count is [class] : {this.state.count}</h1>
        <button onClick={this.increaseCount}>Increase Count</button>
        <button onClick={this.decreaseCount}>Decrease Count</button>
      </div>
    )
  }
}

export default StateInClass;