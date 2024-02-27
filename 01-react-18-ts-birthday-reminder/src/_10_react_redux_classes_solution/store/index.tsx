import { createStore } from "redux";
import { friendsReducer } from "./../reducers/friendsReducer";

export default createStore(friendsReducer);
