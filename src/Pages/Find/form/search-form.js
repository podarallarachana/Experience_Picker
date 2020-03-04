import React, { useContext } from "react";
import { Row, Col, Tabs, Card, Select, Button } from "antd";
import UserLocation from "../../../Shared/user-location";
import Restaurant from "./restaurant";
import Recreational from "./recreational";
import Events from "./events";
import Context from "../../../Store/context";
// import categories from "../Shared/categories-data";
const { Option } = Select;
const { TabPane } = Tabs;

const SearchForm = props => {
  const { state } = useContext(Context);
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
    <Card style={{ backgroundColor: "grey" }}>
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
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <h4>Distance</h4>
          <Select
            defaultValue={props.curr_form.distance}
            showSearch
            style={{ width: "100%" }}
            onChange={e => props.update_curr_form("distance", e)}
          >
            <Option value="1600">1 mi</Option>
            <Option value="8000">5 mi</Option>
            <Option value="16000">10 mi</Option>
            <Option value="25100">15 mi</Option>
            <Option value="32200">20 mi</Option>
            <Option value="40000">25 mi</Option>
          </Select>
        </Col>
      </Row>
      <UserLocation />
      <Row gutter={[16, 16]} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
          <Button
            type="primary"
            shape="round"
            size={"large"}
            style={{ width: "100%" }}
            onClick={e => props.submit_curr_form()}
            disabled={state.val_status === "success" ? false : true}
          >
            Find
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default SearchForm;
