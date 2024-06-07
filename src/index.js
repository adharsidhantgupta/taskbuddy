import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.createRoot is used to create a root element that serves as the entry point for the React component tree. This method enables features like concurrent rendering, automatic batching, and improved performance.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

{
  /* <React.StrictMode> in React is a development tool that helps identify potential problems in an application by running extra checks and warnings. It's used to catch unsafe lifecycle methods, deprecated APIs, unexpected side effects, and other issues early, ensuring better code quality and future compatibility */
}
