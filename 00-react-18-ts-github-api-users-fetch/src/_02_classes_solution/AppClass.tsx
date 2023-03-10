import { Component } from "react";
import UserType from "./types/UserType";
import UserListClass from "./components/UsersListClass";

//-----------------------------------------------------
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

//-------------------------------------------------------

/*  IMPORTANT: global state type definition is incomplete: missing Props definition in line 33

    Solution is to define directly the type of state in front of the state
    state: StateType OR StateInterface =  { ... }

    See AppClassV2 in  /_02_classes_solution_v2

*/
export default class AppClass extends Component<GlobalStateType> {
  state = {
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

  //--------------------
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

  //--------------------------
  render() {
    return (
      <>
        <h2>class component</h2>
        <UserListClass users={this.state.usersState.users} />
      </>
    );
  }
}
