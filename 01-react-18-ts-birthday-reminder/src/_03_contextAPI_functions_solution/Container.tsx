import ListContextAPI from "./ListFunctionContextAPI";
import { FriendsContext } from "./context/FriendsContext";

export default function Container() {
  return (
    <FriendsContext.Consumer>
      {(context) => {
        // Use optional chaining to safely access context properties
        const people = context?.people || [];
        const handleRefresh = context?.handleRefresh || (() => {});
        const setPeople = context?.setPeople || (() => {});

        return (
          <main>
            <section className="container">
              <span> context API + functions solution</span>
              {people.length > 1 && <h3>{people.length} birthdays today</h3>}
              {(people.length === 1 || people.length === 0) && (
                <h3>{people.length} birthday today</h3>
              )}{" "}
              <ListContextAPI />
              {people.length !== 0 && (
                <button onClick={() => setPeople([])}> Clear all</button>
              )}
              {people.length === 0 && (
                <button onClick={handleRefresh}> Refresh</button>
              )}
            </section>
          </main>
        );
      }}
    </FriendsContext.Consumer>
  );
}

/* n°2 : non null initial context 
---------------------------------*/
// import ListContextAPI from "./ListFunctionContextAPI";
// import { FriendsContext } from "./context/FriendsContext";

// export default function Container() {
//   return (
//     <FriendsContext.Consumer>
//       {(context) => {
//         const { people, handleRefresh, setPeople } = context;
//         const quantity = people.length > 1 ? "birthdays" : "birthday";
//         return (
//           <main>
//             <section className="container">
//               <span> context API + functions solution</span>
//               {people.length >= 0 && (
//                 <h3>
//                   {people.length} {quantity} today
//                 </h3>
//               )}

//               <ListContextAPI />
//               {people.length !== 0 && (
//                 <button onClick={() => setPeople([])}> Clear all</button>
//               )}
//               {people.length === 0 && (
//                 <button onClick={handleRefresh}> Refresh</button>
//               )}
//             </section>
//           </main>
//         );
//       }}
//     </FriendsContext.Consumer>
//   );
// }
