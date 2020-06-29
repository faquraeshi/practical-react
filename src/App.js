import React, {Component} from 'react';
import './App.css';
// components
import Header from './components/Header';
import Body, {Body2, Body3} from './components/Body';
import Counter from './components/Counter';


class App extends Component {
  add(a,b) {
    return a+b
  }

  render() {
    return (
      <div className="App">
        <Header
          title={"Hello from the App"}
          count={7}
          myArr={[10,2,3]}
          myFunc={this.add}
          myObj={{
            a: 5,
            b: 11
          }}
        />
        <Body
          greetTxt="Hello, React..."
          greetTxt2="This is 2nd greeting"
          myFunc={this.add} />
        <Body2 />
        <Body3 />
        <Counter initialCount={0} />
        <Counter initialCount={10} />
      </div>
    );
  }
}

export default App;