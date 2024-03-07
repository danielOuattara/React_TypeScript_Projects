// using useContext
//-----------------------------------------------------------------

// import React, { useContext } from "react";
// import Error from "./Error";
// import Loading from "./Loading";
// import ResetTours from "./ResetTours";
// import Tours from "./Tours";
// import { ToursContext } from "../context/ToursContext";

// function Container() {
//   const { isError, loading, tours } = useContext(ToursContext);

//   if (isError) {
//     return <Error />;
//   }

//   if (loading) {
//     return <Loading />;
//   }

//   if (tours.length === 0) {
//     return <ResetTours />;
//   }

//   return <Tours />;
// }

// export default Container;

// using ToursContext.Consumer
//-------------------------------------------------------------------

import { Component } from "react";
import Error from "./Error";
import Loading from "./Loading";
import ResetTours from "./ResetTours";
import Tours from "./Tours";
import { ToursContext } from "../context/ToursContext";

export default class Container extends Component {
  render() {
    return (
      <ToursContext.Consumer>
        {(context) => {
          const isError = context?.isError || false;
          const isLoading = context?.isLoading || false;
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
}
