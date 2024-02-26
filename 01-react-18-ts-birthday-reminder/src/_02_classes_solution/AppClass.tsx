import { Component } from "react";
import data from "../data";
import List from "./ListFunction";

export default class AppClass extends Component {
  state = {
    people: data,
    country: "Mali",
  };

  handleEmpty = () => {
    this.setState((prevState: TypePersonClass) => ({
      ...prevState,
      people: [],
    }));
  };

  handleRefresh = () => {
    this.setState((prevState: TypePersonClass) => ({
      ...prevState,
      people: data,
    }));
  };

  handleRemoveOnePerson = (id: string) => {
    this.setState((prevState: TypePersonClass) => ({
      ...prevState,
      people: this.state.people.filter((person) => person.id !== id),
    }));
  };

  render() {
    const quantity = this.state.people.length > 1 ? "birthdays" : "birthday";

    return (
      <main>
        <section className="container">
          <span> typescript + class component</span>
          {this.state.people.length >= 0 && (
            <h3>
              {this.state.people.length} {quantity} today
            </h3>
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
