import React from "react";
import ReactDOM from "react-dom/client";
import AppFunction from "./_01_functions_solution/AppFunction";
import AppClass from "./_02_classes_solution/AppClass";
import AppClassV2 from "./_02_classes_solution_v2/AppClassV2";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AppFunction />
    <hr />
    {/* <AppClass /> */}
    <hr />
    <AppClassV2 />
  </React.StrictMode>,
);
