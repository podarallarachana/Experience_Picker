import React, { useContext } from "react";
import { Card, Col, Avatar, Button, List } from "antd";
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

  const getDollars = (price, name) => {
    if (price) {
      const n = price.length;
      return (
        <p>
          {[...Array(n)].map((e, i) => (
            <i
              key={i}
              className="fa fa-usd"
              aria-hidden="true"
              style={{ color: "#1DA57A" }}
            ></i>
          ))}{" "}
          {name}
        </p>
      );
    } else {
      return <p>{name}</p>;
    }
  };

  const getStars = rating => {
    if (rating) {
      var hasHalf = false;
      var n = rating;
      if (rating % 1 !== 0) {
        n = parseInt(Math.floor(rating));
        hasHalf = true;
      }
      return (
        <p>
          {[...Array(n)].map((e, i) => (
            <i
              key={i}
              className="fa fa-star"
              aria-hidden="true"
              style={{ color: "#ffec3d" }}
            ></i>
          ))}
          {hasHalf ? (
            <i
              className="fa fa-star-half-o"
              aria-hidden="true"
              style={{ color: "#ffec3d" }}
            ></i>
          ) : (
            ""
          )}
        </p>
      );
    } else {
      return rating;
    }
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
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 4 }}
              xxl={{ span: 4 }}
              key={business.id}
              onClick={() => {
                props.get_details(business.id);
              }}
            >
              <List.Item>
                <div
                  className="detail-card"
                  style={{
                    width: "100%",
                    backgroundColor: "#fff"
                  }}
                >
                  <br />
                  <div className="detail-img">
                    <img
                      height="130px"
                      width="130px"
                      alt="example"
                      src={business.image_url}
                    />
                  </div>
                  <br />
                  <div
                    className="detail-description"
                    style={{
                      textAlign: "center",
                      padding: "0px 20px",
                      height: "50px",
                      textOverflow: "ellipsis"
                    }}
                  >
                    {getDollars(business.price, business.name)}

                    {getStars(business.rating)}

                    <br />
                  </div>
                  <br />
                  <div style={{ padding: "0px 50px 20px 50px" }}>
                    <Avatar
                      size="small"
                      icon={<i className="fa fa-yelp" aria-hidden="true"></i>}
                    />
                    &nbsp;&nbsp;
                    <Avatar
                      size="small"
                      icon={<i className="fa fa-yelp" aria-hidden="true"></i>}
                    />
                  </div>
                </div>
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
