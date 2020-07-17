import React, {Component} from 'react';

export default class MyForm extends Component {

  state = {
    name: "Pavel",
    favPet: "",
    rememberMe: false,
    title: "",
  }

  handleChange = e => {
    console.log(e.target.name);
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input placeholder="jot down your thoughts"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <textarea placeholder="jot down your thoughts"
            name="favPet"
            value={this.state.favPet}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input type="checkbox"
            name="rememberMe"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Miss</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </form>
    );
  }
}