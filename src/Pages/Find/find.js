import React from "react";
import Nav from "../../Shared/nav";
import Context from "../../Store/context";

import ApolloClient, { InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

class Find extends React.Component {
  static contextType = Context;

  client = new ApolloClient({
    uri: `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/graphql`,
    request: operation => {
      operation.setContext({
        headers: {
          Authorization: process.env.REACT_APP_API_KEY
        }
      });
    }
  });

  componentDidMount() {
    this.client
      .query({
        query: gql`
          {
            business(id: "garaje-san-francisco") {
              name
              id
              alias
              rating
              url
            }
          }
        `
      })
      .then(result => console.log(result));
  }

  render() {
    return (
      <div className="App">
        <Nav selected="find" />
        <h1>{this.context.state.selected}</h1>
      </div>
    );
  }
}

export default Find;
