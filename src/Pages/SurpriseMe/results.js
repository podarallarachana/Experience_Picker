import React, { useEffect } from "react";
import { Row, Col, Select, Slider, Radio, Checkbox } from "antd";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";

const myquery = gql`
  {
    search(term: "burrito", location: "san francisco", limit: 5) {
      total
      business {
        name
        url
      }
    }
  }
`;

const Redsults = props => {
  return (
    <Query query={myquery}>
      {({ data, loading, error }) => {
        console.log("IM CALLED");
        if (loading) return <p>loading...</p>;
        if (error) return <p>ERROR</p>;

        return (
          <ul>
            {data.search.business.map(({ name, url }) => (
              <li key={url}>{name}</li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
};

export default Redsults;
