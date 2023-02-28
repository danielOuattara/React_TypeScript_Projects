import { Component } from "react";
import Values from "values.js";

type PropsType = {
  index: number;
  color: Values;
  listLength: number;
};

export default class SingleColorClass extends Component<PropsType> {
  state = {
    alert: false,
  };

  handleCopyToClipBoard = () => {
    this.setState({ alert: true });
    navigator.clipboard.writeText(this.props.color.hexString());
  };

  componentDidUpdate() {
    // ??
    const timeOutSet = setTimeout(() => this.setState({ alert: false }), 1500);
    return () => clearTimeout(timeOutSet);
  }

  render() {
    const { color, index } = this.props;
    return (
      <article
        onClick={this.handleCopyToClipBoard}
        className={index > 7 ? "color-light color" : "color"}
        style={{ backgroundColor: `${color.hexString()}` }}
      >
        <p className="percent-value">{color.weight} %</p>
        <p className="color-value">{color.hexString()}</p>
        {this.state.alert && (
          <p className={index > 7 ? "alert-light alert" : "alert"}>
            copied to clipboard
          </p>
        )}
      </article>
    );
  }
}
