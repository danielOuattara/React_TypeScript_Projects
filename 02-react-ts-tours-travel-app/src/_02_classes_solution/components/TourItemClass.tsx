import { Component } from "react";

type TourItemClassProps = {
  tour: ITour;
  removeTourItem: Function;
};

export default class TourItemClass extends Component<TourItemClassProps> {
  state = {
    readMore: false,
  };

  render() {
    return (
      <article className="single-tour">
        <img
          src={this.props.tour.image}
          alt={`${this.props.tour.name} description`}
        />
        <footer>
          <div className="tour-info">
            <h4>{this.props.tour.name}</h4>
            <h4 className="tour-price">${this.props.tour.price}</h4>
          </div>
          <p>
            {this.state.readMore
              ? this.props.tour.info
              : this.props.tour.info.substring(0, 135) + " ..."}
            <button
              onClick={() => this.setState({ readMore: !this.state.readMore })}
            >
              {this.state.readMore ? "show less" : "read more"}
            </button>
          </p>
          <button
            className="delete-btn"
            onClick={() => this.props.removeTourItem(this.props.tour.id)}
          >
            remove this tour
          </button>
        </footer>
      </article>
    );
  }
}
