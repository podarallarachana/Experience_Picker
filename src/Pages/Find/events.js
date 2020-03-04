import React from "react";
import { Row, Col, Select, Radio } from "antd";
const { Option } = Select;

const Events = props => {
  return (
    <div>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h4>Category</h4>
          <Select
            defaultValue="Restaurants"
            showSearch
            style={{ width: "100%" }}
          >
            <Option value="Restaurants">Restaurants</Option>
            <Option value="Recreational">Recreational Activities</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h4>Available</h4>
          <Select defaultValue="All..." showSearch style={{ width: "100%" }}>
            <Option value="All...">Today</Option>
            <Option value="10">All week</Option>
            <Option value="10">Next two weeks</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h4>Free?</h4>
          <Radio.Group value={2}>
            <Radio value={1}>yes</Radio>
            <Radio value={2}>no</Radio>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  );
};

export default Events;
