import { Component } from "react";
import data from "../data";
import List from "./ListFunction";

type PersonType = {
  people: {
    id: string;
    name: string;
    age: number;
    image: string;
  };
  country: string;
};

export default class AppClass extends Component {
  state = {
    people: data,
    country: "Mali",
  };

  handleEmpty = () => {
    this.setState((prevState: PersonType["people"]) => ({
      ...prevState,
      people: [],
    }));
  };

  handleRefresh = () => {
    this.setState((prevState: PersonType) => ({
      ...prevState,
      people: data,
    }));
  };

  handleRemoveOnePerson = (id: string) => {
    this.setState((prevState: PersonType) => ({
      ...prevState,
      people: this.state.people.filter((person) => person.id !== id),
    }));
  };

  render() {
    return (
      <main>
        <section className="container">
          <span> typescript + class component</span>
          {this.state.people.length > 1 && (
            <h3>{this.state.people.length} birthdays today</h3>
          )}
          {(this.state.people.length === 1 ||
            this.state.people.length === 0) && (
            <h3>{this.state.people.length} birthday today</h3>
          )}
          <List
            people={this.state.people}
            handleRemoveOnePerson={this.handleRemoveOnePerson}
          />
          {this.state.people.length !== 0 && (
            <button onClick={this.handleEmpty}> clear all</button>
          )}
          {this.state.people.length === 0 && (
            <button onClick={this.handleRefresh}> Refresh</button>
          )}
        </section>
      </main>
    );
  }
}
