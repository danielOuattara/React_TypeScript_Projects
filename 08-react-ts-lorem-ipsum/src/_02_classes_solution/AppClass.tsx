import React, { Component } from "react";
import data from "./../data";

export default class AppClass extends Component {
  state = {
    numberOfParagraph: "1",
    text: [],
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    return this.setState((prevState) => ({
      ...prevState,
      numberOfParagraph: event.target.value,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    return this.setState((prevState) => ({
      ...prevState,
      text: data.slice(0, parseInt(this.state.numberOfParagraph)),
    }));
  };
  render() {
    return (
      <section className="section-center">
        <h3>tired of boring lorem ipsum ?</h3>

        <form className="lorem-form" onSubmit={this.handleSubmit}>
          <label htmlFor="numbParagraph">number of paragraph ?</label>
          <input
            id="numbParagraph"
            type="number"
            min="1"
            max={data.length}
            value={this.state.numberOfParagraph}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>

        <article className="lorem-text">
          {this.state.text.map((item: string, index: number) => (
            <p key={index}>{item}</p>
          ))}
        </article>
      </section>
    );
  }
}
