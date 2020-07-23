import React, {Component} from 'react';

// style imports
import './App.css';

// project component imports
import ImageSlider from './components/ImageSlider';
import Counter from './components/Counter';
import Header from './components/Header';
import MyForm from './components/MyForm';
import ValidationForm from './components/ValidationForm';
import FetchRandomUser from './components/FetchRandomUser';


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
      title: "Simple Image Slider",
    },
    counter: {
      name: "Counter",
      title: "Simple Counter",
    },
    header: {
      name: "Header",
      title: "The Header",
    },
    form: {
      name: "MyForm",
      title: "React Form",
    },
    validationForm: {
      name: "validationForm",
      title: "Form Validation",
    },
    randomUser: {
      name: "randomUser",
      title: "Fetch Random User(s)",
    },
    whichComponentToShow: 'randomUser',
    btnTxt_home_screen: 'Let\'s Go Home',
    btnTxt_slider_screen: 'Land on Slider',
    btnTxt_counter_screen: 'Show Counter',
    btnTxt_form_screen: 'Show Form',
    btnTxt_validationForm_screen: 'Show ValidationForm',
    btnTxt_randomUser_screen: 'Show Random Users',
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
            >{this.state.btnTxt_counter_screen}</button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.header.name});
            }}
            >{this.state.btnTxt_home_screen}</button>
        </div>
      );
    } else if (this.state.whichComponentToShow === this.state.counter.name) {
      return (
        <div className="App">
          <h1>{this.state.counter.title}</h1>
          <div style={this.sectionStyle}>
            <div className={this.state.visible ? 'visible flex-container' : 'hidden'}>
              <Counter initialCount={10} />
            </div>
            <button
              style={this.toggleBtnStyle}
              onClick={this.toggle}>
              toggle counter</button>
          </div>
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.header.name});
            }}
            >{this.state.btnTxt_home_screen}</button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.slider.name});
            }}
            >{this.state.btnTxt_slider_screen}</button>
          
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
            >{this.state.btnTxt_counter_screen}</button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.slider.name});
            }}
            >{this.state.btnTxt_slider_screen}</button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.form.name});
            }}
            >{this.state.btnTxt_form_screen}</button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.validationForm.name});
            }}
            >{this.state.btnTxt_validationForm_screen}</button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.randomUser.name});
            }}
            >{this.state.btnTxt_randomUser_screen}</button>
        </div>
      )
    } else if (this.state.whichComponentToShow === this.state.form.name) {
      return (
        <div className="App">
          <h1>{this.state.form.title}</h1>
          <MyForm />
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.header.name});
            }}
            >{this.state.btnTxt_home_screen}</button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.validationForm.name});
            }}
            >{this.state.btnTxt_validationForm_screen}</button>
        </div>
      )
    } else if (this.state.whichComponentToShow === this.state.validationForm.name) {
      return (
        <div className="App">
          <h1>{this.state.form.title}</h1>
          <ValidationForm />
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.randomUser.name});
            }}
            >{this.state.btnTxt_randomUser_screen}</button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.header.name});
            }}
            >{this.state.btnTxt_home_screen}</button>
        </div>
      )
    } else if (this.state.whichComponentToShow === this.state.randomUser.name) {
      return (
        <div className="App">
          <h1>{this.state.randomUser.title}</h1>
          <FetchRandomUser />
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.validationForm.name});
            }}
            >{this.state.btnTxt_validationForm_screen}</button>
          &nbsp;&nbsp;&nbsp;
          <button
            onClick={() => {
              this.setState({whichComponentToShow: this.state.header.name});
            }}
            >{this.state.btnTxt_home_screen}</button>
        </div>
      )
    }  
  }
}

export default App;