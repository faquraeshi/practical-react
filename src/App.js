import React, {Component} from 'react';
import Counter from './components/Counter';

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
    visible: true,
  }

  render() {
    const btnTxt = this.state.visible ? 'hide slider' : 'show slider';
    const slider = this.state.visible ? <ImageSlider /> : <Counter initialCount={10} />;
    
    return (
      <div className="App">
        <h1>Simple Image Slider</h1>
        <div style={this.sectionStyle}>
          {slider}
        </div>
        <button
          onClick={() => {
            this.setState({visible: !this.state.visible});
          }}
          >{btnTxt}</button>
      </div>
    );
  }
}

export default App;