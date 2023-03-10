import { Component } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./data";

export default class AppClassV1 extends Component {
  state = {
    index: 0,
  };

  slider: NodeJS.Timeout | undefined;

  checkIndex = (indexArg: number) => {
    if (indexArg === -1) {
      return this.setState({ index: people.length - 1 });
    } else if (indexArg === people.length) {
      return this.setState({ index: 0 });
    } else {
      return this.setState({ index: indexArg });
    }
  };

  componentDidMount(): void {
    this.checkIndex(this.state.index);
  }

  componentDidUpdate(): void {
    this.slider = setInterval(
      () => this.checkIndex(this.state.index + 1),
      3000,
    );
  }

  render() {
    clearInterval(this.slider);
    return (
      <section className="section">
        <div className="title">
          <p>class solution</p>

          <h2>
            <span>/</span> reviews
          </h2>
        </div>

        <div className="section-center">
          {people.map((person, personIndex) => {
            let position = "nextSlide";
            if (this.state.index === personIndex) {
              position = "activeSlide";
            }
            if (
              this.state.index === personIndex + 1 ||
              (this.state.index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={person.id}>
                <img
                  src={person.image}
                  alt={person.name}
                  className="person-img"
                />
                <h4>{person.name}</h4>
                <p className="title">{person.title}</p>
                <p className="text">{person.quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}

          <button
            className="prev"
            onClick={() => this.setState({ index: this.state.index - 1 })}
          >
            <FiChevronLeft />
          </button>
          <button
            className="prev"
            onClick={() => this.setState({ index: this.state.index + 1 })}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>
    );
  }
}
