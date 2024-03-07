import { Component } from "react";
import { ToursContext } from "../context/ToursContext";

export class ResetTours extends Component {
  static contextType = ToursContext;

  // Type assertion for 'this.context'
  context!: React.ContextType<typeof ToursContext>;

  render() {
    const fetchTours = this.context?.fetchTours || (async () => {});
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
  }
}

export default ResetTours;
