import React, { Component } from "react";
import AlertType from "../types/AlertType";

type AlertPropsType = {
  type: AlertType["type"];
  msg: AlertType["msg"];
  showAlert: Function;
};

export default class Alert extends Component<AlertPropsType> {
  timeoutId: NodeJS.Timeout | undefined;

  componentDidUpdate(): void {
    this.timeoutId = setTimeout(() => {
      this.props.showAlert();
    }, 1500);
  }

  render() {
    clearTimeout(this.timeoutId);
    return <p className={`alert alert-${this.props.type}`}>{this.props.msg}</p>;
  }
}
