import React, {Component} from 'react';
import logo from '../logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Title: {this.props.title}</h1>
        <p>Count: {this.props.count}</p>
        <p>Object: {JSON.stringify(this.props.myObj)}</p>
        {/* <p>Object Prop `a`: {this.props.myObj.a}</p> */}
        {/* <p>Object Prop `b`: {this.props.myObj.b}</p> */}
        <p>Array: {this.props.myArr[0]}</p>
        <p>MethodCall: {this.props.myFunc(10,12)}</p>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React</a>
      </header>
    );
  }
}