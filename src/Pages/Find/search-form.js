import React, { useContext, useEffect } from "react";
import { Row, Col, Slider, Card, Radio, Select, Input, Button } from "antd";

const { Option } = Select;

const SearchForm = props => {
  return (
    <Card>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <h4>Category</h4>
          <Select
            defaultValue="Restaurants"
            showSearch
            style={{ width: "100%" }}
          >
            <Option value="Restaurants">Restaurants</Option>
            <Option value="10">10 mi</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <h4>Subcatergory</h4>
          <Select defaultValue="All..." showSearch style={{ width: "100%" }}>
            <Option value="All...">All...</Option>
            <Option value="10">10 mi</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <h4>Zip code</h4>
          <Input placeholder="55129" style={{ width: "100%" }} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <h4>Distances</h4>
          <Select defaultValue="10" showSearch style={{ width: "100%" }}>
            <Option value="5">Within 5 mi</Option>
            <Option value="10">Within 10 mi</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <h4>Rating</h4>
          <Slider range step={0.5} min={1} max={5} defaultValue={[3, 4.5]} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <h4>Price</h4>
          <Radio.Group value={2}>
            <Radio value={1}>$</Radio>
            <Radio value={2}>$$</Radio>
            <Radio value={3}>$$$</Radio>
            <Radio value={4}>$$$$</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <br />
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <Button
            type="primary"
            shape="round"
            size={"large"}
            style={{ width: "100%" }}
          >
            Find
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default SearchForm;
