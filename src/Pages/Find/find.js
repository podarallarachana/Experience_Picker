import React from "react";
import Nav from "../../Shared/nav";
import SearchForm from "./search-form";
import Context from "../../Store/context";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { Layout } from "antd";
import "./find.scss";

import { Row, Col, Slider, Card, Radio, Select, Input, Button } from "antd";
const { Option } = Select;
// const { Content } = Layout;

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
    return (
      <div>
        <Nav selected="find" />
        {/* <h1>{this.context.state.selected}</h1>
        <h2>
          {typeof this.props.data.business === "undefined"
            ? "NOT"
            : this.props.data.business.id}
        </h2> */}
        <div style={{ padding: "0 50px" }}>
          <h1>Find something fun to do!</h1>
          <SearchForm />
        </div>
      </div>
    );
  }
}

// export default graphql(getQuery)(Find);
export default Find;
