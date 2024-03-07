import { Component } from "react";
import TourItem from "./TourItem";
import { ToursContext } from "../context/ToursContext";

export default class ToursClass extends Component {
  render() {
    return (
      <ToursContext.Consumer>
        {(context) => {
          const tours = context?.tours || [];
          return (
            <main>
              <section>
                <div className="title">
                  <p>context API + classes component solutions</p>
                  <h2>our tours</h2>
                  <div className="underline"></div>
                  <div>
                    {tours.map((item) => {
                      return <TourItem key={item.id} item={item} />;
                    })}
                  </div>
                </div>
              </section>
            </main>
          );
        }}
      </ToursContext.Consumer>
    );
  }
}
