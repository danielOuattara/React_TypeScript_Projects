import data from "./../../data";
import {
  REMOVE_ALL_FRIENDS,
  REMOVE_FRIEND,
  RESET_ALL_FRIENDS,
} from "../actions/friendsActions";

const initialState = data;

export const friendsReducer = (
  state = initialState,
  action: TypeFriendsReduxAction,
) => {
  switch (action.type) {
    case REMOVE_FRIEND:
      return state.filter((person) => person.id !== action.payload);

    case REMOVE_ALL_FRIENDS:
      return (state = []);

    case RESET_ALL_FRIENDS:
      return (state = initialState);

    default:
      return state;
  }
};
