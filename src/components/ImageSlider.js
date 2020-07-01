import React, {Component} from 'react';


/*
  1. shallow merge
  2. async
*/

export default class ImageSlider extends Component {
  state = {
    images: [
      "/assets/images/2015_charlie_bachman_erd-uml.jpg",
      "/assets/images/flowers-frame_chris-wilsone_hotelroom.jpg",
      "/assets/images/pattern_pentagraph_islamic.png",
      "/assets/images/peter-chen_the-mastermind-behind_erd.jpg",
      "/assets/images/slack-meme-199x300.jpeg",
    ],
    idx: 0,
  }

  // styles
  styl_sliderContainer = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }
  styl_sliderImage = {
    width: 'auto',
    height: '90%',
    marginBottom: 10,
  }
  styl_btn_prev = {
    width: 'auto',
    height: 30,
    background: '#0f0f0f',
    padding: 5,
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    position: 'absolute',
    top: '45%',
    left: 20,
    zIndex: 1,
  }
  styl_btn_next = {
    width: 'auto',
    height: 30,
    background: '#0f0f0f',
    padding: 5,
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    position: 'absolute',
    top: '45%',
    right: 20,
    zIndex: 1,
  }

  // Methods
  handlePrev = () => {
    this.setState({
      idx: this.state.idx - 1,  // shallow merge
    },
    () => {                     // async callback
      if (this.state.idx < 0) {
        this.setState({
          idx: this.state.images.length -1,
        })
      }
    });
  }
  handleNext = () => {
    console.log(this.state);
    this.setState({
      idx: this.state.idx + 1,  // shallow merge
    },
    () => {                     // async callback
      if (this.state.idx == this.state.images.length) {
        this.setState({
          idx: 0,
        })
      }
    });
  }


  render() {
    return (
      <div style={this.styl_sliderContainer}>
        <button style={this.styl_btn_prev} onClick={this.handlePrev}>prev</button>
        <img style={this.styl_sliderImage} src={this.state.images[this.state.idx]} />
        <em>image caption placeholder</em>
        <button style={this.styl_btn_next} onClick={this.handleNext}>next</button>
      </div>
    );
  }
}