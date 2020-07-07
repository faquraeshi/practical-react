import React, {Component} from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: props.initialCount,
    };
  }

  componentDidMount() {
    console.log('Mounted');
  }
  componentWillUnmount() {
    console.log('Umounted');
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
      <div>
        <button onClick={this.decrement}>- decrement -</button>
        <span>&nbsp;&nbsp; counter: {this.state.count} &nbsp;&nbsp;</span>
        <button onClick={this.increment}>+ increment +</button>
      </div>
    );
  }
}