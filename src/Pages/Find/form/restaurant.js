import React from "react";
import { Row, Col, Select, Slider, Radio, Checkbox } from "antd";
const { Option } = Select;

const Restaurant = props => {
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
          <h4>Subcatergory</h4>
          <Select defaultValue="All..." showSearch style={{ width: "100%" }}>
            <Option value="All...">All...</Option>
            <Option value="10">10 mi</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h4>Rating</h4>
          <Slider range step={0.5} min={1} max={5} defaultValue={[3, 4.5]} />
        </Col>
      </Row>
      <Checkbox.Group style={{ width: "100%" }}>
        <Row>
          <h4>Price</h4>
          <Col span={6}>
            <Checkbox value="A">$</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="B">$$</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="C">$$$</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="D">$$$$</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
      <br />
      <br />
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h4>Open?</h4>
          <Radio.Group value={2}>
            <Radio value={1}>yes</Radio>
            <Radio value={2}>no</Radio>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  );
};

export default Restaurant;
