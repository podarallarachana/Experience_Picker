import React, { useContext } from "react";
import { Card, Col, Avatar, List } from "antd";
import Context from "../../Store/context";
import { Link } from "react-router-dom";
import {
  AntDesignOutline,
  DashboardOutline,
  TwitterOutline
} from "@ant-design/icons";
import AntdIcon from "@ant-design/icons-react";
import "./find.scss";
AntdIcon.add(AntDesignOutline, DashboardOutline);

const { Meta } = Card;

const FindResults = props => {
  const { state } = useContext(Context);

  function displayResults() {
    if (props.curr_form.is_loading) {
      return <h1>LOADING</h1>;
    } else {
      if (props.curr_form.results === undefined) {
        return <h1>Search for info</h1>;
      } else if (props.curr_form.results === null) {
        return <h1>Error fetching data, try again!</h1>;
      } else if (props.curr_form.results.data.businesses.length === 0) {
        return <h1>No search results, broaden your params</h1>;
      } else {
        // return (
        //   <List
        //     grid={{ gutter: 16, column: 4 }}
        //     dataSource={props.curr_form.results.data.businesses}
        //     renderItem={item => (
        //       <List.Item>
        //         <Card title={item.name}>Card content</Card>
        //       </List.Item>
        //     )}
        //   />
        // );
        return props.curr_form.results.data.businesses.map(business => {
          return (
            <Col
              xs={{ span: 24 }}
              sm={{ span: 8 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 6 }}
              xxl={{ span: 4 }}
              key={business.id}
              onClick={() => {
                props.get_details(business.id);
              }}
            >
              <List.Item>
                <Card
                  style={{ width: "100%" }}
                  cover={<img src={business.image_url} alt="NA" />}
                  actions={[
                    <AntdIcon type={TwitterOutline} />,
                    <AntdIcon type={TwitterOutline} />
                  ]}
                >
                  {" "}
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </List.Item>
            </Col>
          );
        });
      }
    }
  }

  return <div className="App">{displayResults()}</div>;
};

export default FindResults;
