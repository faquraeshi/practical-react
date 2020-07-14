import React, {Component} from 'react';


/*
  1. shallow merge
  2. async
*/

export default class ImageSlider extends Component {
  state = {
    idx: 0,
    images: [
      {
        url: "/assets/images/2015_charlie_bachman_erd-uml.jpg",
        title: "Charlie Bachmen: ERD UML"
      },
      {
        url: "/assets/images/flowers-frame_chris-wilsone_hotelroom.jpg",
        title: "Picture Frame: Chris Wilsone's Hotelroom"
      },
      {
        url: "/assets/images/pattern_pentagraph_islamic.png",
        title: "Pattern: Islamic Pentagraph"
      },
      {
        url: "/assets/images/peter-chen_the-mastermind-behind_erd.jpg",
        title: "Peter Chen: The Mastermind Behind ERD"
      },
      {
        url: "/assets/images/slack-meme-199x300.jpeg",
        title: "I'm Hip: Slack Meme"
      },
    ],
  }

  // styles
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
    this.setState(
      {
        idx: this.state.idx - 1,  // shallow merge
      },
      () => {                     // async callback
        console.log(this.state.idx);
        if (this.state.idx < 0) {
          this.setState({
            idx: this.state.images.length - 1,
          });
          console.log(this.state.idx);
        }
      }
    );
  }
  handleNext = () => {
    this.setState(
      {
        idx: this.state.idx + 1  // shallow merge
      },
      () => {                    // async callback
        console.log(this.state.idx);
        if (this.state.idx === this.state.images.length) {
          this.setState({
            idx: 0,
          });
          console.log(this.state.idx);
        }
      }
    );
  }

  render() {
    return (
      <div className="flex-container flex-container--column">
        <button style={this.styl_btn_prev} onClick={this.handlePrev}>prev</button>
        <img
          style={this.styl_sliderImage}
          src={this.state.images[this.state.idx].url}
          alt="" />
        <em>{this.state.images[this.state.idx].title}</em>
        <button style={this.styl_btn_next} onClick={this.handleNext}>next</button>
      </div>
    );
  }
}