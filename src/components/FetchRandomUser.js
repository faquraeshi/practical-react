import React, {Component} from 'react';

export default class FetchRandomUser extends Component {

  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState(
      {
        person: data.results[0],
        loading: false,
      }
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div>loading...</div>
      )
    }
    if (!this.state.person) {
      return (
        <div>something's missing! didn't get any data :(</div>
      )
    }
    return (
      <div>
        <div>
          <img
            src={this.state.person.picture.medium}
            title={this.state.person.name.first+" "+this.state.person.name.last}
            alt={this.state.person.name.first+" "+this.state.person.name.last}
          />
          <div>{this.state.person.name.first}</div>
          <div>{this.state.person.name.last}</div>
        </div>
      </div>
    );
  }
}