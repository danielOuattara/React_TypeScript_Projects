import { Component } from "react";
import TourItemClass from "./TourItemClass";
import GlobalFetchStateType from "../types/GlobalFetchStateType";

type TourClassPropsType = {
  tours: GlobalFetchStateType["tours"];
  removeTourItem: Function;
};

export default class ToursClass extends Component<TourClassPropsType> {
  render() {
    return (
      <main>
        <section>
          <div className="title">
            <h2>our tours</h2>
            <h3>class component</h3>
            <div className="underline"></div>
            <div>
              {this.props.tours.map((item) => {
                return (
                  <TourItemClass
                    key={item.id}
                    tour={item}
                    removeTourItem={this.props.removeTourItem}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }
}
