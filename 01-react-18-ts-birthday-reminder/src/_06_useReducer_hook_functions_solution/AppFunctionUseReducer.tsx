import { useReducer } from "react";
import data from "./../data";
import { friendsReducer } from "./reducers/friendsReducer";
import ListFunctionUseReducer from "./ListFunctionUseReducer";

const initialState: TypeFriendsState = data;

export default function AppFunctionUseReducer() {
  const [friendsState, dispatchFriends] = useReducer(
    friendsReducer,
    initialState,
  );

  const handleRemoveAllFriends = () => {
    return dispatchFriends({ type: "REMOVE_ALL_FRIENDS" });
  };

  const handleRefresh = () => {
    return dispatchFriends({ type: "RESET_ALL_FRIENDS", payload: data });
  };

  const quantity = friendsState.length > 1 ? "birthdays" : "birthday";

  return (
    <main>
      <section className="container">
        <span> useReducer solution</span>

        {friendsState.length >= 0 && (
          <h3>
            {friendsState.length} {quantity} today
          </h3>
        )}

        <ListFunctionUseReducer
          dispatchFriends={dispatchFriends}
          friendsState={friendsState}
        />
        {friendsState.length !== 0 && (
          <button onClick={handleRemoveAllFriends}> Clear all</button>
        )}
        {friendsState.length === 0 && (
          <button onClick={handleRefresh}> Refresh</button>
        )}
      </section>
    </main>
  );
}
