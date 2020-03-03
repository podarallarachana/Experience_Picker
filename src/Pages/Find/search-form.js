import React, { useState, useEffect } from "react";
import { Row, Col, Slider, Tabs, Card, Radio, Select, Button } from "antd";
import UserLocation from "../../Shared/user-location";
import Restaurant from "./restaurant";
import Recreational from "./recreational";
import Events from "./events";
// import categories from "../Shared/categories-data";
const { Option } = Select;
const { TabPane } = Tabs;

const SearchForm = props => {
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  // const [address, setAddress] = useState("");
  // const [distance, setDistance] = useState("10");

  // const [res_category, setResCategory] = useState("");
  // const [res_subcategory, setResSubCategory] = useState("");
  // const [res_rating, setResRating] = useState("");
  // const [res_price, setResPrice] = useState("");
  // const [res_open, setResOpen] = useState(true);

  // const [rec_category, setRecCategory] = useState("");
  // const [rec_subcategory, setRecSubCategory] = useState("");
  // const [rec_rating, setRecRating] = useState("");
  // const [rec_price, setRecPrice] = useState("");
  // const [rec_open, setRecOpen] = useState(true);

  // const [ev_category, setEvCategory] = useState("");
  // const [ev_available, setEvAvailable] = useState("");
  // const [ev_free, setFree] = useState(true);

  // const [search_by, setSearchBy] = useState("");

  return (
    <Card>
      <UserLocation />
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <h4>Distance</h4>
          <Select
            defaultValue={props.curr_form.distance}
            showSearch
            style={{ width: "100%" }}
            onChange={e => props.update_curr_form("distance", e)}
          >
            <Option value="500">5 mi</Option>
            <Option value="1000">10 mi</Option>
            <Option value="1500">15 mi</Option>
            <Option value="2000">20 mi</Option>
            <Option value="4000">40 mi</Option>
            <Option value="6000">60 mi</Option>
            <Option value="1000000">100 mi</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <Tabs defaultActiveKey="1">
            <TabPane tab=" Restaurants" key="1">
              <Restaurant curr_form={props.curr_form} />
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
