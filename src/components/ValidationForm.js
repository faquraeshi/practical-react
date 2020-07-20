import React, {Component} from 'react';

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
}

export default class ValidationForm extends Component {

  state = initialState;

  handleChange = e => {
    // console.log(e.target.name);
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  }

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    if (!this.state.name) {
      nameError = "name shouldn't be empty!";
    }
    if (!this.state.email.includes('@')) {
      emailError = "invalid email";
    }
    if (!this.state.password) {
      passwordError = "password shouldn't be empty!";
    }
    if (nameError || emailError || passwordError) {
      this.setState({nameError, emailError, passwordError});
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      
      // clear the form
      this.setState(initialState);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div style={{color: "red", fontSize: "11px"}}>
          {this.state.nameError}
        </div>
        <div>
          <input placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div style={{color: "red", fontSize: "11px"}}>
          {this.state.emailError}
        </div>
        <div>
          <input type="password"
            name="password"
            placeholder = "password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div style={{color: "red", fontSize: "11px"}}>
          {this.state.passwordError}
        </div>
        <button type="submit" onClick={this.handleSubmit}>submit</button>
      </form>
    );
  }
}