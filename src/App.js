import React, {Component} from 'react';
import Counter from './components/Counter';
import Header from './components/Header';

// style imports
import './App.css';

// project component imports
import ImageSlider from './components/ImageSlider';


class App extends Component {
  // styles
  sectionStyle = {
    width: '90%',
    margin: '30px auto',
    height: '45vh',
    borderRadius: 5,
    backgroundColor: '#ccc',
  }

  state = {
    whichComponentToShow: 'ImageSlider',
    slider: {
      name: "ImageSlider",
      title: 'Simple Image Slider',
    },
    counter: {
      name: "Counter",
      title: 'Simple Counter',
    },
    header: {
      name: "Header",
      title: 'The Header',
    },
    btnTxt_next: 'Next',
    btnTxt_back: 'Back',
  }

  render() {
    if(this.state.whichComponentToShow == this.state.slider.name) {
      return (
        <div className="App">
          <h1>{this.state.slider.title}</h1>
          <div style={this.sectionStyle}>
            <ImageSlider />
          </div>
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.counter.name});
            }}
            >{this.state.btnTxt_next}</button>
        </div>
      );
    } else if (this.state.whichComponentToShow == this.state.counter.name) {
      return (
        <div className="App">
          <h1>{this.state.counter.title}</h1>
          <div style={this.sectionStyle}>
            <Counter initialCount={10} />
          </div>
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.slider.name});
            }}
            >{this.state.btnTxt_back}</button>
            &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.header.name});
            }}
            >{this.state.btnTxt_next}</button>
        </div>
      )
    } else if (this.state.whichComponentToShow == this.state.header.name) {
      return (
        <div className="App">
          <h1>{this.state.header.title}</h1>
          <Header />
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.counter.name});
            }}
            >{this.state.btnTxt_back}</button>
        </div>
      )
    }
    
  }
}

export default App;