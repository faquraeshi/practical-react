import React, {Component} from 'react';

export default class MyForm extends Component {

  state = {
    name: "Pavel",
    favPet: "",
    rememberMe: false,
    title: "",
  }

  handleChange = (e, fieldName, isCheckbox) => {
    console.log(fieldName);
    this.setState({
      [fieldName]: isCheckbox ? e.target.checked : e.target.value,
    });
  }
  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <input placeholder="jot down your thoughts"
            value={this.state.name}
            onChange={e => this.handleChange(e, "name")}
          />
        </div>
        <div>
          <textarea placeholder="jot down your thoughts"
            value={this.state.favPet}
            onChange={e => this.handleChange(e, "favPet")}
          />
        </div>
        <div>
          <input type="checkbox"
            checked={this.state.rememberMe}
            onChange={e => this.handleChange(e, "rememberMe", true)}
          />
        </div>
        <div>
          <select 
            value={this.state.title}
            onChange={e => this.handleChange(e, "title")}
          >
            <option>Mr.</option>
            <option>Miss</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}