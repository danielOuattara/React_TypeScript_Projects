import { Component } from "react";
import { ToursContext } from "../context/ToursContext";

export default class Error extends Component {
  render() {
    return (
      <ToursContext.Consumer>
        {(context) => {
          const errorMessage = context?.errorMessage || false;
          return (
            <main>
              <div className="title">
                <h2>{errorMessage}</h2>
              </div>
            </main>
          );
        }}
      </ToursContext.Consumer>
    );
  }
}
