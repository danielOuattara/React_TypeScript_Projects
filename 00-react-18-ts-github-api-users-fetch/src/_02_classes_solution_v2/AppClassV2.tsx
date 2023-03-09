import { Component } from "react";
import UserType from "./types/UserType";
import UserListClass from "./components/UsersListClass";

export type PropsType = {};
export type StateType = {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  users: UserType[];
};

const url = "https://api.github.com/users";

export default class AppClass extends Component {
  state: StateType = {
    isLoading: true,
    isError: false,
    errorMessage: "",
    users: [],
  };

  fetchUsers = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        this.setState((prevState: StateType) => ({
          ...prevState,
          isError: true,
          isLoading: false,
          errorMessage: `${res.statusText} ${res.status}`,
        }));
        throw Error(res.statusText);
      } else {
        const fetchedUsers = await res.json();
        this.setState((prevState: StateType) => ({
          ...prevState,
          isLoading: false,
          isError: false,
          users: fetchedUsers,
        }));
      }
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  componentDidMount(): void {
    this.fetchUsers();
  }

  render() {
    return (
      <>
        <h2>class component</h2>
        <UserListClass users={this.state.users} />
      </>
    );
  }
}
