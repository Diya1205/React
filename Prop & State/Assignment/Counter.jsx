import React, { Component } from 'react'

export default class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      );
    }
  }