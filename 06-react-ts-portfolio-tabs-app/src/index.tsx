import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppFunctionV1 from "./_01_function_solution_v1/AppFunctionV1";
import AppFunctionV2 from "./_01_function_solution_v2/AppFunctionV2";
import AppFunctionV3 from "./_01_function_solution_v3/AppFunctionV3";
import AppFunctionV4 from "./_01_function_solution_v4/AppFunctionV4";
import AppClassV1 from "./_02_class_solution_v1/AppClassv1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AppFunctionV1 />
    <hr />
    <AppFunctionV2 />
    <hr />
    <AppFunctionV3 />
    <hr />
    <AppFunctionV4 />
    <hr />
    <AppClassV1 />
  </React.StrictMode>,
);
