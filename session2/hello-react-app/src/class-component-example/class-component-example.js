import React, { Component } from "react";

class ClassComponentExample extends Component {
  render() {
    return (
      <div>
        <h1>hello class component {this.props.name}</h1>
      </div>
    )
  }
}

export default ClassComponentExample;