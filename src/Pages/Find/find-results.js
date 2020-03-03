import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Slider, Tabs, Card, Radio, Select, Button } from "antd";
import Context from "../../Store/context";

const FindResults = props => {
  const { state, actions } = useContext(Context);

  return (
    <Card>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <h4>distance: {props.curr_form.distance}</h4>
          <h4>lat: {state.lat}</h4>
          <h4>long: {state.long}</h4>
          <h4>address: {state.address}</h4>
          <h4>address_valid?: {state.val_status}</h4>
        </Col>
      </Row>
    </Card>
  );
};

export default FindResults;
