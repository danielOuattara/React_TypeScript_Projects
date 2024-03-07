import data from "../../data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../store";

export interface IFriendsState {
  friends: TypeFriendsReduxState;
}

const initialFriendsState: IFriendsState = {
  friends: data,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState: initialFriendsState,
  reducers: {
    removeOneFriend(state, action: PayloadAction<string>) {
      state.friends = state.friends.filter(
        (person) => person.id !== action.payload,
      );
    },
    removeAllFriends(state) {
      state.friends = [];
    },
    resetAllFriends(state) {
      state.friends = initialFriendsState.friends;
    },
  },
});

export const friendsActions = friendsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.friends;

export default friendsSlice.reducer;

//-----------------------------------
