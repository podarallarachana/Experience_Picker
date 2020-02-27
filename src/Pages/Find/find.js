import React from "react";
import Nav from "../../Shared/nav";
import Context from "../../Store/context";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { Layout } from "antd";
import "./find.scss";

import { Row, Col, Slider, Card, Radio, Select, Input, Button } from "antd";
const { Option } = Select;
// const { Content } = Layout;

const getQuery = gql`
  {
    business(id: "garaje-san-francisco") {
      name
      id
      alias
      rating
      url
    }
  }
`;

class Find extends React.Component {
  static contextType = Context;

  state = {
    value: 1
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Nav selected="find" />
        {/* <h1>{this.context.state.selected}</h1>
        <h2>
          {typeof this.props.data.business === "undefined"
            ? "NOT"
            : this.props.data.business.id}
        </h2> */}
        <div style={{ padding: "0 50px" }}>
          <Card>
            <h4>Category</h4>
            <Select defaultValue="All..." showSearch style={{ width: "100%" }}>
              <Option value="All...">All...</Option>
              <Option value="10">10 mi</Option>
            </Select>
            <br />
            <br />
            <h4>Subcatergory</h4>
            <Select defaultValue="All..." showSearch style={{ width: "100%" }}>
              <Option value="All...">All...</Option>
              <Option value="10">10 mi</Option>
            </Select>
            <br />
            <br />
            <h4>Zip code</h4>
            <Input placeholder="55129" style={{ width: "100%" }} />
            <br />
            <br />
            <h4>Distances</h4>
            <Slider step={5} max={100} defaultValue={10} />
            <br />
            <h4>Rating</h4>
            <Slider range step={0.5} min={1} max={5} defaultValue={[3, 4.5]} />
            <br />
            <h4>Price</h4>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>$</Radio>
              <Radio value={2}>$$</Radio>
              <Radio value={3}>$$$</Radio>
              <Radio value={4}>$$$$</Radio>
            </Radio.Group>
            <br />
            <br />
            <br />
            <Button
              type="primary"
              shape="round"
              size={"large"}
              style={{ width: "200px" }}
            >
              Find
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default graphql(getQuery)(Find);
