import React, {Component} from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: props.initialCount,
    };
  }

  // styles
  styl_sliderContainer = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    return (
      <div style={this.styl_sliderContainer}>
        <button onClick={this.decrement}>- decrement -</button>
        <span>&nbsp;&nbsp; counter: {this.state.count} &nbsp;&nbsp;</span>
        <button onClick={this.increment}>+ increment +</button>
      </div>
    );
  }
}