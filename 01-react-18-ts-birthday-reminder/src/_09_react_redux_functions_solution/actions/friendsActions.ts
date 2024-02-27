export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const REMOVE_ALL_FRIENDS = "REMOVE_ALL_FRIENDS";
export const RESET_ALL_FRIENDS = "RESET_ALL_FRIENDS";

function removeOneFriend(id: string) {
  return {
    type: REMOVE_FRIEND,
    payload: id,
  };
}

function removeAllFriends() {
  return {
    type: REMOVE_ALL_FRIENDS,
  };
}

function resetAllFriends() {
  return {
    type: RESET_ALL_FRIENDS,
  };
}

export { removeOneFriend, removeAllFriends, resetAllFriends };
