import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import useGlobalState from "./Store/useGlobalState";
import Context from "./Store/context";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/graphql`
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.REACT_APP_API_KEY;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      headers,
      authorization: token ? process.env.REACT_APP_API_KEY : "",
      "Accept-Language": "en-US"
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
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
