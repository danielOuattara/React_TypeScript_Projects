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

import React, { Component } from "react";
import Error from "./Error";
import Loading from "./Loading";
import ResetTours from "./ResetTours";
import Tours from "./Tours";
import { ToursContext } from "../context/ToursContext";

export default class Container extends Component {
  static contextType = ToursContext;

  // Type assertion for 'this.context'
  context!: React.ContextType<typeof ToursContext>;

  render() {
    const isError = this.context?.isError || false;
    const isLoading = this.context?.isLoading || false;
    const tours = this.context?.tours || [];

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
  }
}
