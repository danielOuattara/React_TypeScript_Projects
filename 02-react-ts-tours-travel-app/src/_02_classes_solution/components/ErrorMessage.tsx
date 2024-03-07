import { Component } from "react";

type ErrorMessagePropsType = {
  errorMessage: IGlobalFetchState["errorMessage"];
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
