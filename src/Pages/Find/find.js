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

  render() {
    if (this.props.data.business) {
      return (
        <div className="App">
          <Nav selected="find" />
          <h1>{this.context.state.selected}</h1>
          <h2>{this.props.data.business.id}</h2>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Nav selected="find" />
          <h1>{this.context.state.selected}</h1>
          <h2>NO</h2>
        </div>
      );
    }
  }
}

export default graphql(getQuery)(Find);
