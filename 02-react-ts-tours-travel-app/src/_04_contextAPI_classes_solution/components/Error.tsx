import { Component } from "react";
import { ToursContext } from "../context/ToursContext";

export default class Error extends Component {
  static contextType = ToursContext;

  // Type assertion for 'this.context'
  context!: React.ContextType<typeof ToursContext>;

  render() {
    const errorMessage = this.context?.errorMessage || false;
    return (
      <main>
        <div className="title">
          <h2>{errorMessage}</h2>
        </div>
      </main>
    );
  }
}
