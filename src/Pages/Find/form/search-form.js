import React, { useContext } from "react";
import {
  Row,
  Col,
  Tabs,
  Card,
  Select,
  Button,
  Typography,
  Collapse
} from "antd";
import UserLocation from "../../../Shared/user-location";
import Restaurant from "./restaurant";
import Recreational from "./recreational";
import Events from "./events";
import Context from "../../../Store/context";
import "../find.scss";
import {
  AntDesignOutline,
  DashboardOutline,
  CaretRightOutline
} from "@ant-design/icons";
import AntdIcon from "@ant-design/icons-react";
const { Option } = Select;
const { TabPane } = Tabs;
const { Title } = Typography;
const { Panel } = Collapse;

const SearchForm = props => {
  const { state } = useContext(Context);

  return (
    <div className="FindHeader">
      <div className="FindFormArea">
        <Row gutter={[16, 16]} type="flex" justify="center">
          <Col xs={24} sm={18} md={12} lg={10} xl={10}>
            <Title style={{ color: "#fff", fontWeight: "bold" }}>
              FIND SOMETHING FOR YOU
            </Title>
            <Card
              style={{ borderRadius: "0px", border: "0px", outline: "0px" }}
            >
              <Tabs defaultActiveKey="1">
                <TabPane tab="Restaurants" key="1">
                  <Restaurant curr_form={props.curr_form} />
                </TabPane>
                <TabPane tab="Recreational" key="2">
                  <Recreational />
                </TabPane>
                <TabPane tab="Events" key="3">
                  <Events />
                </TabPane>
              </Tabs>
            </Card>
            <Collapse
              style={{ borderRadius: "0px", border: "0px", outline: "0px" }}
              bordered={false}
              className="site-collapse-custom-collapse"
            >
              <Panel
                header="Get more specific..."
                key="1"
                className="site-collapse-custom-panel"
              >
                <p>HOJDID</p>
              </Panel>
            </Collapse>
            <Button
              type="primary"
              size={"large"}
              style={{
                width: "100%",
                height: "70px",
                borderRadius: "0px",
                outline: "0px",
                border: "0px"
              }}
              onClick={e => props.submit_curr_form()}
              disabled={state.val_status === "success" ? false : true}
            >
              Find
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SearchForm;
