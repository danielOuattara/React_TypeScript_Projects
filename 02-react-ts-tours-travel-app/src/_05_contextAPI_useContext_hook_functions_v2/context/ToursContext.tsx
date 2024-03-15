/* n°1 : null initial context 
--------------------------------*/

import { createContext, useContext } from "react";
import useFetchTours from "../customHooks/useFetchTours";

export const ToursContext = createContext<ITourContext | null>(null);

function ToursContextProvider({ children }: ITourContextProvider) {
  const {
    isLoading,
    isError,
    errorMessage,
    tours,
    fetchTours,
    removeTourItem,
  } = useFetchTours();

  // console.log("tours = ", tours);

  return (
    <ToursContext.Provider
      value={{
        isLoading,
        isError,
        errorMessage,
        tours,
        removeTourItem,
        fetchTours,
      }}
    >
      {children}
    </ToursContext.Provider>
  );
}

export default ToursContextProvider;

export function useToursContext() {
  return useContext(ToursContext);
}

/* n°2 : NON null initial context 
--------------------------------*/

// import { createContext } from "react";
// import useFetchTours from "../customHooks/useFetchTours";

// export const ToursContext = createContext<ITourContext>({
//   isLoading: true,
//   isError: false,
//   errorMessage: "",
//   tours: [],
//   fetchTours: async () => {},
//   removeTourItem: () => {},
// });

// function ToursContextProvider({ children }: ITourContextProvider) {
//   const {
//     isLoading,
//     isError,
//     errorMessage,
//     tours,
//     fetchTours,
//     removeTourItem,
//   } = useFetchTours();

//   return (
//     <ToursContext.Provider
//       value={{
//         isLoading,
//         isError,
//         errorMessage,
//         tours,
//         removeTourItem,
//         fetchTours,
//       }}
//     >
//       {children}
//     </ToursContext.Provider>
//   );
// }

// export default ToursContextProvider;
