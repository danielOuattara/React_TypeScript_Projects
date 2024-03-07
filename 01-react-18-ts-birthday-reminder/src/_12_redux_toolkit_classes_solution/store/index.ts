import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "./friends-slice";

const store = configureStore({
  reducer: {
    friends: friendsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {friends: friendsSate, posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
