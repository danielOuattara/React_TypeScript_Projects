/* n°1 : null initial context 
--------------------------------*/

// import ListContextAPI from "./ListFunctionContextAPI";
// import { useFriendsContext } from "./context/FriendsContext";
// import data from "./../data";

// export default function Container() {
//   const { friendsState = [], dispatchFriends = () => {} } =
//     useFriendsContext() || {};

//   const handleRemoveAllFriends = () => {
//     dispatchFriends({ type: "REMOVE_ALL_FRIENDS" });
//   };

//   const handleRefresh = () => {
//     dispatchFriends({ type: "RESET_ALL_FRIENDS", payload: data });
//   };

//   return (
//     <main>
//       <section className="container">
//         <span> useReducer + context API solution</span>
//         {friendsState.length > 1 && (
//           <h3>{friendsState.length} birthdays today</h3>
//         )}
//         {(friendsState.length === 1 || friendsState.length === 0) && (
//           <h3>{friendsState.length} birthday today</h3>
//         )}
//         <ListContextAPI />
//         {friendsState.length !== 0 && (
//           <button onClick={() => handleRemoveAllFriends()}> Clear all</button>
//         )}
//         {friendsState.length === 0 && (
//           <button onClick={handleRefresh}> Refresh</button>
//         )}
//       </section>
//     </main>
//   );
// }

//-----------------------------------------------------------------------------
/* n°2 : non null initial context 
---------------------------------*/

import ListContextAPI from "./ListFunctionContextAPI";
import { useFriendsContext } from "./context/FriendsContext";
import data from "./../data";

export default function Container() {
  const { friendsState, dispatchFriends } = useFriendsContext();
  const handleRemoveAllFriends = () => {
    dispatchFriends({ type: "REMOVE_ALL_FRIENDS" });
  };

  const handleRefresh = () => {
    dispatchFriends({ type: "RESET_ALL_FRIENDS", payload: data });
  };
  return (
    <main>
      <section className="container">
        <span> useReducer + context API solution</span>
        {friendsState.length > 1 && (
          <h3>{friendsState.length} birthdays today</h3>
        )}
        {(friendsState.length === 1 || friendsState.length === 0) && (
          <h3>{friendsState.length} birthday today</h3>
        )}
        <ListContextAPI />
        {friendsState.length !== 0 && (
          <button onClick={() => handleRemoveAllFriends()}> Clear all</button>
        )}
        {friendsState.length === 0 && (
          <button onClick={handleRefresh}> Refresh</button>
        )}
      </section>
    </main>
  );
}
