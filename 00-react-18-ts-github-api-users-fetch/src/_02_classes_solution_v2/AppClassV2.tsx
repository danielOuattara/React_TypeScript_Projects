import { Component } from "react";
import UserType from "./types/UserType";
import UserListClass from "./components/UsersListClass";
import SingleUser from "./components/SingleUser";

export type StateType = {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  users: UserType[];
};

export type GlobalStateType = {
  usersState: {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
    users: UserType[];
  };
  singleUserState: {
    singleUserLoading: boolean;
    singleUserError: boolean;
    singleUserErrorMessage: string;
    singleUserData: UserType | {};
  };
};

const url = "https://api.github.com/users";

export default class AppClass extends Component {
  state: GlobalStateType = {
    usersState: {
      isLoading: true,
      isError: false,
      errorMessage: "",
      users: [],
    },
    singleUserState: {
      singleUserLoading: true,
      singleUserError: false,
      singleUserErrorMessage: "",
      singleUserData: {},
    },
  };

  //------------
  fetchUsers = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        this.setState((prevState: GlobalStateType) => ({
          ...prevState,
          usersState: {
            ...prevState.usersState,
            isError: true,
            isLoading: false,
            errorMessage: `${res.statusText} ${res.status}`,
          },
        }));
        throw Error(res.statusText);
      } else {
        const fetchedUsers = await res.json();
        this.setState((prevState: GlobalStateType) => ({
          ...prevState,
          usersState: {
            ...prevState.usersState,
            isLoading: false,
            isError: false,
            users: fetchedUsers,
          },
        }));
      }
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  //-------------------
  fetchSingleUser = async (usernameArg: string) => {
    try {
      const res = await fetch(`${url}/${usernameArg}`);
      if (!res.ok) {
        this.setState((prevState: GlobalStateType) => ({
          ...prevState,
          singleUserState: {
            ...prevState.singleUserState,
            singleUserError: true,
            singleUserLoading: false,
            singleUserErrorMessage: `${res.statusText} ${res.status}`,
          },
        }));
        throw Error(res.statusText);
      } else {
        const fetchedUser = await res.json();
        this.setState((prevState: GlobalStateType) => ({
          ...prevState,
          singleUserState: {
            ...prevState.singleUserState,
            singleUserError: false,
            singleUserLoading: false,
            singleUserErrorMessage: "",
            singleUserData: fetchedUser,
          },
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
        <h2> react + typescript class solution</h2>
        <SingleUser
          singleUserState={this.state.singleUserState}
          fetchSingleUser={this.fetchSingleUser}
        />
        <UserListClass users={this.state.usersState.users} />
      </>
    );
  }
}
