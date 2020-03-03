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

  useEffect(() => {
    // console.log(categories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            onChange={e => props.update_distance(e)}
          >
            <Option value="5">5 mi</Option>
            <Option value="10">10 mi</Option>
            <Option value="15">15 mi</Option>
            <Option value="20">20 mi</Option>
            <Option value="40">40 mi</Option>
            <Option value="60">60 mi</Option>
            <Option value="100">100 mi</Option>
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
