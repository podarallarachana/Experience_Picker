import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Slider, Tabs, Card, Radio, Select, Button } from "antd";
import Context from "../../Store/context";

const FindResults = props => {
  const { state, actions } = useContext(Context);
  const [results, setResults] = useState("loading...");

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search`,
  //       {
  //         headers: {
  //           Authorization: process.env.REACT_APP_YELP_KEY
  //         },
  //         params: {
  //           latitude: state.lat,
  //           longitude: state.long
  //         }
  //       }
  //     )
  //     .then(res => {
  //       setResults(res);
  //     })
  //     .catch(err => {
  //       setResults("NA");
  //     });
  // }, []);

  function displayResults() {
    if (props.results === null) {
      return <h1>LOADING</h1>;
    } else if (results === "NA") {
      return <h1>SORRY</h1>;
    } else {
      // return <h1>NOT</h1>;
      return props.results.data.businesses.map(business => {
        return <li key={business.id}>{business.name}</li>; //CHANGE KEY TO ID
      });
    }
  }

  // return (
  //   <Card>
  //     <Row gutter={[16, 16]} type="flex" justify="center">
  //       <Col xs={24} sm={24} md={12} lg={10} xl={10}>
  //         <h4>distance: {props.curr_form.distance}</h4>
  //         <h4>lat: {state.lat}</h4>
  //         <h4>long: {state.long}</h4>
  //         <h4>address: {state.address}</h4>
  //         <h4>address_valid?: {state.val_status}</h4>
  //       </Col>
  //     </Row>
  //   </Card>
  // );

  return <div className="App">{displayResults()}</div>;
};

export default FindResults;
