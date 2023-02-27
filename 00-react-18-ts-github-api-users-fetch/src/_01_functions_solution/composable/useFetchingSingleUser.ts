import { useState } from "react";
import UserType from "./../types/UserType";

export type StateType = {
  singleUserLoading: boolean;
  singleUserError: boolean;
  singleUserErrorMessage: string;
  singleUserData: UserType | {};
};

export default function useFetchingSingleUser() {
  const [singleState, setSingleState] = useState<StateType>({
    singleUserLoading: true,
    singleUserError: false,
    singleUserErrorMessage: "",
    singleUserData: {},
  });

  const url = "https://api.github.com/users";

  async function fetchSingleUser(usernameArg: string) {
    try {
      const res = await fetch(`${url}/${usernameArg}`);
      if (!res.ok) {
        setSingleState((prevState: StateType) => ({
          ...prevState,
          singleUserError: true,
          singleUserLoading: false,
          singleUserErrorMessage: `${res.statusText} ${res.status}`,
        }));
        throw Error(res.statusText);
      } else {
        const fetchedUser = await res.json();
        setSingleState((prevState: StateType) => ({
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

  return { singleState, fetchSingleUser };
}
