/* n°1 : null initial context 
--------------------------------*/

// import { createContext, useReducer } from "react";
// import data from "../../data";
// import { friendsReducer } from "../reducers/friendsReducer";

// type TypeFriendsContext = {
//   friendsState: TypeFriendsState;
//   dispatchFriends: React.Dispatch<TypeFriendsAction>;
// };

// export const FriendsContext = createContext<TypeFriendsContext | null>(null);

// type TypeProps = {
//   children: React.ReactNode;
// };

// const initialState = data;

// export default function FriendsContextProvider({ children }: TypeProps) {
//   const [friendsState, dispatchFriends] = useReducer(
//     friendsReducer,
//     initialState,
//   );
//   return (
//     <FriendsContext.Provider value={{ friendsState, dispatchFriends }}>
//       {children}
//     </FriendsContext.Provider>
//   );
// }

/* n°2 : non null initial context 
---------------------------------*/

import { createContext, useReducer } from "react";
import data from "../../data";
import { friendsReducer } from "../reducers/friendsReducer";

type TypeFriendsContext = {
  friendsState: TypeFriendsState;
  dispatchFriends: React.Dispatch<TypeFriendsAction>;
};

export const FriendsContext = createContext<TypeFriendsContext>({
  friendsState: [],
  dispatchFriends: () => {},
});

const initialState = data;

type TypeProps = {
  children: React.ReactNode;
};
export default function FriendsContextProvider({ children }: TypeProps) {
  const [friendsState, dispatchFriends] = useReducer(
    friendsReducer,
    initialState,
  );
  return (
    <FriendsContext.Provider value={{ friendsState, dispatchFriends }}>
      {children}
    </FriendsContext.Provider>
  );
}
