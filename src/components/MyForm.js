import React, {Component} from 'react';

export default class MyForm extends Component {

  state = {
    name: "Pavel",
    favPet: "",
    rememberMe: false,
    title: "",
  }

  handleChangeName = e => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  }
  handleChangeFavPet = e => {
    console.log(e.target.value);
    this.setState({
      favPet: e.target.value,
    });
  }
  handleCheck = e => {
    console.log(e.target.checked);
    this.setState({
      rememberMe: e.target.checked,
    });
  }
  handleSelect = e => {
    console.log(e.target.value);
    this.setState({
      title: e.target.value,
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
            onChange={this.handleChangeName}
          />
        </div>
        <div>
          <textarea placeholder="jot down your thoughts"
            value={this.state.favPet}
            onChange={this.handleChangeFavPet}
          />
        </div>
        <div>
          <input type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleCheck}
          />
        </div>
        <div>
          <select 
            value={this.state.title}
            onChange={this.handleSelect}
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