import React, {Component} from 'react';

/*
  1. shallow merge
  2. async
*/

export default class ImageSlider extends Component {
  state = {
    images: [
      "https://todaysmama.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_400/MTU5OTA5MDU2MjgxNzgxNjIz/image-placeholder-title.webp",
      "https://todaysmama.com/.image/t_share/MTU5OTA4OTYwNDQ5NjAyOTM1/image-placeholder-title.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0AaZUAGFihm8BRSqfeZx5ab_2MqELC3_Zdw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDX4B0wPZlTeBl7buyCAFXubuHXP1-Zd13Fw&usqp=CAU",
      "https://www.hortmag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4OTExNDMwMTQwNzY1OTA0/image-placeholder-title.jpg"
    ],
    idx: 0,
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
  styl_sliderImage = {
    width: 'auto',
    height: '90%',
  }
  styl_btn_prev = {
    width: 'auto',
    height: 30,
    background: '#0f0f0f',
    margin: '20px 40px',
    padding: 5,
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    position: 'absolute',
    top: '45%',
    left: 0,
    zIndex: 1,
  }
  styl_btn_next = {
    width: 'auto',
    height: 30,
    background: '#0f0f0f',
    margin: '20px 40px',
    padding: 5,
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    position: 'absolute',
    top: '45%',
    right: 0,
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
        <button style={this.styl_btn_next} onClick={this.handleNext}>next</button>
      </div>
    );
  }
}