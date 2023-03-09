import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";
import SingleUser from "./components/SingleUser";
import UserType from "./types/UserType";

export type UsersStateType = {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  users: UserType[];
};

export type SingleUserStateType = {
  singleUserLoading: boolean;
  singleUserError: boolean;
  singleUserErrorMessage: string;
  singleUserData: UserType | {};
};

const url = "https://api.github.com/users";

export default function AppFunction() {
  const [state, setState] = useState<UsersStateType>({
    isLoading: true,
    isError: false,
    errorMessage: "",
    users: [],
  });

  const [singleState, setSingleState] = useState<SingleUserStateType>({
    singleUserLoading: true,
    singleUserError: false,
    singleUserErrorMessage: "",
    singleUserData: {},
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setState((prevState: UsersStateType) => ({
            ...prevState,
            isError: true,
            isLoading: false,
            errorMessage: `${res.statusText} ${res.status}`,
          }));
          throw Error(res.statusText);
        } else {
          const fetchedUsers = await res.json();
          setState((prevState: UsersStateType) => ({
            ...prevState,
            isLoading: false,
            isError: false,
            users: fetchedUsers,
          }));
        }
      } catch (err) {
        console.log((err as Error).message);
      }
    }

    fetchUsers();
  }, []);

  async function fetchSingleUser(usernameArg: string) {
    try {
      const res = await fetch(`${url}/${usernameArg}`);
      if (!res.ok) {
        setSingleState((prevState: SingleUserStateType) => ({
          ...prevState,
          singleUserError: true,
          singleUserLoading: false,
          singleUserErrorMessage: `${res.statusText} ${res.status}`,
        }));
        throw Error(res.statusText);
      } else {
        const fetchedUser = await res.json();
        setSingleState((prevState: SingleUserStateType) => ({
          ...prevState,
          singleUserError: false,
          singleUserLoading: false,
          singleUserErrorMessage: "",
          singleUserData: fetchedUser,
        }));
      }
    } catch (err) {
      console.log((err as Error).message);
    }
  }

  return (
    <>
      <h2>react + typescript function solution version 2: large</h2>
      <SingleUser singleState={singleState} fetchSingleUser={fetchSingleUser} />
      <UsersList users={state.users} />
    </>
  );
}
