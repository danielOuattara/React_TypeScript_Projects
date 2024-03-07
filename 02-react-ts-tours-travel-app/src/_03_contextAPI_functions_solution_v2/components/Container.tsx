/* n°1 :  null initial context 
--------------------------------*/

import Error from "./Error";
import Loading from "./Loading";
import ResetTours from "./ResetTours";
import Tours from "./Tours";
import { ToursContext } from "../context/ToursContext";

function Container() {
  return (
    <ToursContext.Consumer>
      {(context) => {
        const isError = context?.isError || false;
        const isLoading = context?.isLoading || true;
        const tours = context?.tours || [];

        if (isError) {
          return <Error />;
        }

        if (isLoading) {
          return <Loading />;
        }

        if (tours.length === 0) {
          return <ResetTours />;
        }

        return <Tours />;
      }}
    </ToursContext.Consumer>
  );
}

export default Container;

//=============================================================

/* n°2 : NON null initial context 
--------------------------------*/

// import Error from "./Error";
// import Loading from "./Loading";
// import ResetTours from "./ResetTours";
// import Tours from "./Tours";
// import { ToursContext } from "../context/ToursContext";

// function Container() {
//   return (
//     <ToursContext.Consumer>
//       {(context) => {
//         const { isError, isLoading, tours } = context;

//         if (isError) {
//           return <Error />;
//         }

//         if (isLoading) {
//           return <Loading />;
//         }

//         if (tours.length === 0) {
//           return <ResetTours />;
//         }

//         return <Tours />;
//       }}
//     </ToursContext.Consumer>
//   );
// }

// export default Container;
