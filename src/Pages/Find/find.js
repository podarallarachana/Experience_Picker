import React from "react";
import Nav from "../../Shared/nav";
import Context from "../../Store/context";

import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getQuery = gql`
  {
    business(id: "garaje-san-francisco") {
      name
      id
      alias
      rating
      url
    }
  }
`;

class Find extends React.Component {
  static contextType = Context;

  componentDidMount() {
    console.log(this.props);
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

export default graphql(getQuery)(Find);
