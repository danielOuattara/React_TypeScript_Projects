import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";
import UserType from "./types/UserType";
// import SingleUser from "./components/SingleUser";

export type StateType = {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  users: UserType[];
};

const url = "https://api.github.com/users";

export default function AppFunction() {
  const [state, setState] = useState<StateType>({
    isLoading: true,
    isError: false,
    errorMessage: "",
    users: [],
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setState((prevState: StateType) => ({
            ...prevState,
            isError: true,
            isLoading: false,
            errorMessage: `${res.statusText} ${res.status}`,
          }));
          throw Error(res.statusText);
        } else {
          const fetchedUsers = await res.json();
          setState((prevState: StateType) => ({
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

  return (
    <>
      <h2>function component</h2>
      <UsersList users={state.users} />
    </>
  );
}
