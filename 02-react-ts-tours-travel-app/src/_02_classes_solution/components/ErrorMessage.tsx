import { Component } from "react";
import GlobalFetchStateType from "../types/GlobalFetchStateType";

type ErrorMessagePropsType = {
  errorMessage: GlobalFetchStateType["errorMessage"];
};

export default class ErrorMessage extends Component<ErrorMessagePropsType> {
  render() {
    return (
      <main>
        <div className="title">
          <h2>{this.props.errorMessage}</h2>
        </div>
      </main>
    );
  }
}
