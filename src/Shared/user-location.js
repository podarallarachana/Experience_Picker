import React, { useContext, useEffect, useState } from "react";
import Context from "../Store/context";
import { Row, Col, Input } from "antd";

let coords = "NOT_AVAILABLE";

function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        coords = position.coords.latitude + " " + position.coords.longitude;
        callback();
      },
      function(error) {
        coords = "NOT_AVAILABLE";
        callback();
      }
    );
  } else {
    coords = "NOT_AVAILABLE";
    callback();
  }
}

const UserLocation = props => {
  const [user_coords, setUserCords] = useState("-1");

  useEffect(() => {
    getLocation(function() {
      setUserCords(coords);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <h4>Zip code</h4>
          <Input placeholder={user_coords} style={{ width: "100%" }} />
        </Col>
      </Row>
    </div>
  );
};

export default UserLocation;
