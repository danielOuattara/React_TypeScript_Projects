import React, { Component } from "react";
import { GlobalStateType } from "../AppClassV2";
// import { SingleUserStateType } from "../types/StateType";

type PropsType = {
  fetchSingleUser: (usernameArg: string) => Promise<void>;
  singleUserState: GlobalStateType["singleUserState"];
  // singleUserState: SingleUserStateType;
};

export default class SingleUser extends Component<PropsType> {
  state = {
    userName: "",
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState((prevState) => ({
      ...prevState,
      userName: event.target.value,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!this.state.userName) return;
    this.props.fetchSingleUser(this.state.userName);
    this.setState(() => "");
  };

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <h3>fetch single user infos</h3>
          <div
            className="form-control"
            //   style={{ "grid-template-columns": "150px 1fr" }}
          >
            <label htmlFor="username">Github username :</label>
            <input
              className=""
              type="text"
              name="username"
              id="username"
              value={this.state.userName}
              onChange={this.handleChange}
            />
          </div>
          <p>examples: danielOuattara, quincyLarson, ...</p>
          <button className="btn" type="submit">
            fetch
          </button>
        </form>
        {Object.entries(this.props.singleUserState.singleUserData).length !==
          0 && <h3>User infos :</h3>}

        <ul>
          {Object.entries(this.props.singleUserState.singleUserData).map(
            (subArray) => {
              const [key, value] = subArray;
              return (
                <li
                  style={{ textAlign: "left", margin: "10px 0 10px 10px" }}
                  key={key}
                >
                  {" "}
                  <b>{key}</b> : {value}
                </li>
              );
            },
          )}
        </ul>
      </>
    );
  }
}
