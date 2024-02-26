/* n°1 : null initial context 
--------------------------------*/

import { useState, createContext, useContext } from "react";
import data from "../../data";

type TypeFriendsContext = {
  people: TypePerson[];
  handleRemoveOnePerson: (id: string) => void;
  handleRefresh: () => void;
  setPeople: React.Dispatch<React.SetStateAction<TypePerson[]>>;
};

export const FriendsContext = createContext<TypeFriendsContext | null>(null);

type TypeFriendsContextProviderProps = {
  children: React.ReactNode;
};

export default function FriendsContextProvider({
  children,
}: TypeFriendsContextProviderProps) {
  const [people, setPeople] = useState(data);

  const handleRemoveOnePerson = (id: string) => {
    return setPeople(() => {
      return people.filter((person) => person.id !== id);
    });
  };

  const handleRefresh = () => setPeople(() => data);

  return (
    <FriendsContext.Provider
      value={{ people, handleRemoveOnePerson, handleRefresh, setPeople }}
    >
      {children}
    </FriendsContext.Provider>
  );
}

/* n°2 : non null initial context 
---------------------------------*/

// import { useState, createContext } from "react";
// import data from "../../data";

// type TypeFriendsContext = {
//   people: TypePerson[];
//   handleRemoveOnePerson: (id: string) => void;
//   handleRefresh: () => void;
//   setPeople: React.Dispatch<React.SetStateAction<TypePerson[]>>;
// };

// // providing non null default value for the context
// export const FriendsContext = createContext<TypeFriendsContext>({
//   people: [],
//   handleRemoveOnePerson: () => {},
//   handleRefresh: () => {},
//   setPeople: () => {},
// });

// type TypeFriendsContextProviderProps = {
//   children: React.ReactNode;
// };

// export default function FriendsContextProvider({
//   children,
// }: TypeFriendsContextProviderProps) {
//   const [people, setPeople] = useState(data);

//   const handleRemoveOnePerson = (id: string) => {
//     return setPeople(() => {
//       return people.filter((person) => person.id !== id);
//     });
//   };

//   const handleRefresh = () => setPeople(() => data);

//   return (
//     <FriendsContext.Provider
//       value={{ people, handleRemoveOnePerson, handleRefresh, setPeople }}
//     >
//       {children}
//     </FriendsContext.Provider>
//   );
// }

export const useFriendContext = () => useContext(FriendsContext);
