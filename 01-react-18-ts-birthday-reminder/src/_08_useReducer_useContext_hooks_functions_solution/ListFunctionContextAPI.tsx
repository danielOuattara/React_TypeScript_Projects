/* n°1 : null initial context 
--------------------------------*/

// import { useFriendsContext } from "./context/FriendsContext";

// export default function ListContextAPI() {
//   const { friendsState = [], dispatchFriends = () => {} } =
//     useFriendsContext() || {};

//   const handleRemoveOnePerson = (id: string) => {
//     dispatchFriends({ type: "REMOVE_FRIEND", payload: id });
//   };

//   return (
//     <>
//       {friendsState.length > 1 && (
//         <h2 className="h2_styled">friends to contact</h2>
//       )}
//       {friendsState.length === 1 && (
//         <h2 className="h2_styled">friend to contact</h2>
//       )}
//       {friendsState.map((person) => {
//         return (
//           <article key={person.id} className="person article_styled">
//             <img src={person.image} alt={person.name} />
//             <div>
//               <h4>{person.name}</h4>
//               <p>{person.age} years</p>
//               <button
//                 className="btn_styled"
//                 onClick={() => handleRemoveOnePerson(person.id)}
//               >
//                 Event Finished
//               </button>
//             </div>
//           </article>
//         );
//       })}
//     </>
//   );
// }

//------------------------------------------------------------------------------
/* n°2 : non null initial context 
---------------------------------*/
import { useFriendsContext } from "./context/FriendsContext";

export default function ListContextAPI() {
  const { friendsState, dispatchFriends } = useFriendsContext();
  const handleRemoveOnePerson = (id: string) => {
    dispatchFriends({ type: "REMOVE_FRIEND", payload: id });
  };

  return (
    <>
      {friendsState.length > 1 && (
        <h2 className="h2_styled">friends to contact</h2>
      )}
      {friendsState.length === 1 && (
        <h2 className="h2_styled">friend to contact</h2>
      )}
      {friendsState.map((person) => {
        return (
          <article key={person.id} className="person article_styled">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
              <button
                className="btn_styled"
                onClick={() => handleRemoveOnePerson(person.id)}
              >
                Event Finished
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}
