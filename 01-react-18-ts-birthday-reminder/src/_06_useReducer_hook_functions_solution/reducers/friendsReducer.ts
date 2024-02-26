export const friendsReducer = (
  state: TypeFriendsState,
  action: TypeFriendsAction,
) => {
  switch (action.type) {
    case "REMOVE_FRIEND":
      return state.filter((person) => person.id !== action.payload);

    case "REMOVE_ALL_FRIENDS":
      return (state = []);

    case "RESET_ALL_FRIENDS":
      return (state = action.payload);

    default:
      return state;
  }
};
