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

  const getDescription = (rating, category, price) => {
    let price_s = "";
    let rating_s = "";

    if (price === "$") {
      price_s = "economic";
    } else if (price === "$$") {
      price_s = "good deal";
    } else if (price === "$$$") {
      price_s = "expensive";
    } else if (price === "$$$$") {
      price_s = "very expensive";
    }

    if (rating < 2) {
      rating_s = "suspicious ratings";
    } else if (rating < 3) {
      rating_s = "good ratings";
    } else {
      rating_s = "amazing ratings";
    }

    return category + ", " + rating_s + ", " + price_s;
  };

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
        return props.curr_form.results.data.businesses.map(business => {
          return (
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
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
                  actions={[
                    <AntdIcon type={TwitterOutline} />,
                    <AntdIcon type={TwitterOutline} />
                  ]}
                >
                  {" "}
                  <Meta
                    avatar={
                      business.image_url ? (
                        <Avatar src={business.image_url} />
                      ) : (
                        <Avatar icon={<AntdIcon type={TwitterOutline} />} />
                      )
                    }
                    title={business.name}
                    description={getDescription(
                      business.rating,
                      business.categories[0].title,
                      business.price
                    )}
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
