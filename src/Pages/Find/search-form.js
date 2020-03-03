import React, { useEffect } from "react";
import { Row, Col, Slider, Tabs, Card, Radio, Select, Button } from "antd";
import UserLocation from "../../Shared/user-location";
import Restaurant from "./restaurant";
import Recreational from "./recreational";
import Events from "./events";
// import categories from "../Shared/categories-data";
const { Option } = Select;
const { TabPane } = Tabs;

const SearchForm = props => {
  useEffect(() => {
    // console.log(categories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <UserLocation />
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
          <Tabs defaultActiveKey="1">
            <TabPane tab=" Restaurants" key="1">
              <Restaurant />
            </TabPane>
            <TabPane tab="Recreational" key="2">
              <Recreational />
            </TabPane>
            <TabPane tab="Events" key="3">
              <Events />
            </TabPane>
          </Tabs>
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
