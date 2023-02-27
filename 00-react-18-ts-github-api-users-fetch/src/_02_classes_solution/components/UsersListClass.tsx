import { Component } from "react";
import UserListItemClass from "./UserListItemClass";
import UserType from "../types/UserType";

type UsersProps = {
  users: UserType[];
};
export default class UsersListClass extends Component<UsersProps> {
  render() {
    return (
      <>
        <h3>fetch 30 users data</h3>
        <ul className="users">
          {this.props.users.map((person: UserType) => (
            <UserListItemClass key={person.id} person={person} />
          ))}
        </ul>
      </>
    );
  }
}
