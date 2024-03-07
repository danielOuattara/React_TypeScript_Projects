import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppFunction from "./_01_functions_solution/AppFunction";
import AppClass from "./_02_classes_solution/AppClass";
import AppContextAPI from "./_03_contextAPI_functions_solution/AppFunctionContextAPI";
import AppClassContextAPI from "./_04_contextAPI_classes_solution/AppClassContextAPI";
import AppFunctionContextAPIUseContextHook from "./_05_contextAPI_useContext_solution/AppFunctionContextAPIUseContextHook";
import AppFunctionUserReducer from "./_06_useReducer_hook_functions_solution/AppFunctionUseReducer";
import AppFunctionUseReducerContextAPI from "./_07_useReducer_context_API_functions_solution/AppFunctionUseReducerContextAPI";
import AppFunctionUseReducerUseContext from "./_08_useReducer_useContext_hooks_functions_solution/AppFunctionUseReduceruseContext";
import AppFunctionRedux from "./_09_react_redux_functions_solution/AppFunctionRedux";
import AppClassRedux from "./_10_react_redux_classes_solution/AppClassRedux";
import AppFunctionReduxToolkit from "./_11_redux_toolkits_functions_solution/AppFunctionReduxToolkit";
import AppClassReduxToolkit from "./_12_redux_toolkit_classes_solution/AppClassReduxToolkit";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AppFunction />
    <hr />
    <AppClass />
    <hr />
    <AppContextAPI />
    <hr />
    <AppClassContextAPI />
    <hr />
    <AppFunctionContextAPIUseContextHook />
    <hr />
    <AppFunctionUserReducer />
    <hr />
    <AppFunctionUseReducerContextAPI />
    <hr />
    <AppFunctionUseReducerUseContext />
    <hr />
    <AppFunctionRedux />
    <hr />
    <AppClassRedux />
    <hr />
    <AppFunctionReduxToolkit />

    <hr />
    <AppClassReduxToolkit />
  </React.StrictMode>,
);
