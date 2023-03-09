import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppFunction from "./_01_function_solution/AppFunction";
import AppClass from "./_02_classes_solution/AppClass";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    {/* <AppFunction /> */}
    <hr />
    <AppClass />
  </React.StrictMode>,
);
