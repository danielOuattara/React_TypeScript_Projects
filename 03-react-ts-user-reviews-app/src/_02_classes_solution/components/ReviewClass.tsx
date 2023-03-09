import { Component } from "react";
import people from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default class ReviewClass extends Component {
  state!: {
    index: 0;
  };

  checkIndex = (argIndex: number) => {
    if (argIndex > people.length - 1) {
      return 0;
    } else if (argIndex < 0) {
      return people.length - 1;
    } else {
      return argIndex;
    }
  };

  getPreviousQuote = () =>
    this.setState({ index: this.checkIndex(this.state.index - 1) });

  getNextQuote = () =>
    this.setState({ index: this.checkIndex(this.state.index + 1) });

  getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === this.state.index) {
      return (randomIndex = this.checkIndex(randomIndex - 1));
    }
    return this.setState({ index: randomIndex });
  };

  render() {
    const { name, job, image, text } = people[this.state.index];
    return (
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            {" "}
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={this.getPreviousQuote}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={this.getNextQuote}>
            <FaChevronRight />
          </button>
        </div>
        <div className="button-container">
          <button className="random-btn" onClick={this.getRandomQuote}>
            surprise me
          </button>
        </div>
      </article>
    );
  }
}
