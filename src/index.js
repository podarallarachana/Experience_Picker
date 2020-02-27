import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import useGlobalState from "./Store/useGlobalState";
import Context from "./Store/context";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
require("dotenv").config();

const client = new ApolloClient({
  uri: `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/graphql`,
  request: operation => {
    const token = process.env.REACT_APP_API_KEY;
    operation.setContext({
      headers: {
        authorization: token ? `${token}` : "",
        "Accept-Language": "en-US"
      }
    });
  }
});

const Index = () => {
  const store = useGlobalState();
  return (
    <ApolloProvider client={client}>
      <Context.Provider value={store}>
        <App />
      </Context.Provider>
    </ApolloProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
