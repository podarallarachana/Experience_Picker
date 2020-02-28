import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Input } from "antd";
import Context from "../Store/context";

const UserLocation = props => {
  const { state, actions } = useContext(Context);

  return (
    <div>
      <h1>{state.coords}</h1>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <h4>Zip code</h4>
          <Input placeholder={state.coords} style={{ width: "100%" }} />
        </Col>
      </Row>
    </div>
  );
};

export default UserLocation;
