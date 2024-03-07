import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppFunction from "./_01_function_solution_v1/AppFunction";
// import AppFunctionV2 from "./_01_function_solution_v2/AppFunctionV2";
// import AppClass from "./_02_classes_solution/AppClass";
// import AppFunctionContextAPI from "./_03_contextAPI_functions_solution_v1/AppFunctionContextAPIV1";
// import AppFunctionContextAPIV2 from "./_03_contextAPI_functions_solution_v2/AppFunctionContextAPIV2";
// import AppClassContextAPI from "./_04_contextAPI_classes_solution/AppClassContextAPI";
import AppClassContextAPIV2 from "./_04_contextAPI_classes_solution v2/AppClassContextAPIV2";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    {/* <AppFunction /> */}
    <hr />
    {/* <AppFunctionV2 /> */}
    <hr />
    {/* <AppClass /> */}
    <hr />
    {/* <AppFunctionContextAPI /> */}
    <hr />
    {/* <AppFunctionContextAPIV2 /> */}
    <hr />
    {/* <AppClassContextAPI /> */}
    <hr />
    <AppClassContextAPIV2 />
  </React.StrictMode>,
);
