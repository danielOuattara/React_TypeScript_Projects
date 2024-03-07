import { Component } from "react";
import { ToursContext } from "../context/ToursContext";

export class ResetTours extends Component {
  render() {
    return (
      <ToursContext.Consumer>
        {(context) => {
          const fetchTours = context?.fetchTours || (async () => {});
          return (
            <main>
              <div className="title">
                <p>context API + classes component solutions</p>
                <h2>no tour left</h2>
                <button className="btn" onClick={fetchTours}>
                  refresh
                </button>
              </div>
            </main>
          );
        }}
      </ToursContext.Consumer>
    );
  }
}

export default ResetTours;
