import { Component } from "react";
import UserType from "./../types/UserType";

type PersonProps = {
  person: UserType;
};

export default class UserListItemClass extends Component<PersonProps> {
  render() {
    return (
      <li>
        <img src={this.props.person.avatar_url} alt={this.props.person.login} />
        <div>
          <h4>{this.props.person.login}</h4>
          <a href={this.props.person.html_url} target="_blank" rel="noreferrer">
            Link to {this.props.person.login}
          </a>
        </div>
        <p>Hello</p>
      </li>
    );
  }
}
