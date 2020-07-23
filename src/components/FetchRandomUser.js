import React, {Component} from 'react';

export default class FetchRandomUser extends Component {

  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState(
      {
        people: data.results,
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
    if (!this.state.people.length) {
      return (
        <div>something's missing! didn't get any data :(</div>
      )
    }
    return (
      <div>
        <div>
          {this.state.people.map(person => (
            <div key={person.login.uuid /* any unique strings are required as key(s) */}> 
              <img
                src={person.picture.medium}
                title={person.name.first+" "+person.name.last}
                alt={person.name.first+" "+person.name.last}
              />
              <div>{person.name.first}</div>
              <div>{person.name.last}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}