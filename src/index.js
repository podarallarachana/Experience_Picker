import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import useGlobalState from "./Store/useGlobalState";
import Context from "./Store/context";
require("dotenv").config();

const Index = () => {
  const store = useGlobalState();
  return (
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
