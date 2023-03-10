import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppFunction from "./_01_function_solution_v1/AppFunctionV1";
import AppClass from "./_02_class_solution_v1/AppClassV1";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <AppFunction />
    <hr />
    <AppClass />
  </React.StrictMode>,
);
