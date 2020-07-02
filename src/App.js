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
    position: 'relative',
  }
  toggleBtnStyle = {
    position: 'absolute',
    left: '45%',
    bottom: 20,
  }

  state = {
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
    whichComponentToShow: 'ImageSlider',
    btnTxt_next_screen: 'Next Screen',
    btnTxt_prev_screen: 'Previous Screen',
    visible: true,
  }

  toggle = () =>  {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    if(this.state.whichComponentToShow === this.state.slider.name) {
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
            >{this.state.btnTxt_next_screen}</button>
        </div>
      );
    } else if (this.state.whichComponentToShow === this.state.counter.name) {
      return (
        <div className="App">
          <h1>{this.state.counter.title}</h1>
          <div style={this.sectionStyle}>
            {this.state.visible ? <Counter initialCount={10} /> : null}
            <button
              style={this.toggleBtnStyle}
              onClick={this.toggle}>
              toggle counter</button>
          </div>
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.slider.name});
            }}
            >{this.state.btnTxt_prev_screen}</button>
            &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.header.name});
            }}
            >{this.state.btnTxt_next_screen}</button>
        </div>
      )
    } else if (this.state.whichComponentToShow === this.state.header.name) {
      return (
        <div className="App">
          <h1>{this.state.header.title}</h1>
          <Header />
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.counter.name});
            }}
            >{this.state.btnTxt_prev_screen}</button>
        </div>
      )
    }
    
  }
}

export default App;