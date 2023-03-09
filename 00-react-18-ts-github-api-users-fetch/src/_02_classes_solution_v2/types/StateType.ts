import UserType from "./UserType";

export type StateType = {
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
