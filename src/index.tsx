import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <h1>My React and TypeScript App! Hey Hey Hey</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);