import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  state = {
    sop: "notclicked",
    num: 5
  };

  handleClick = e => {
    console.log(this.state.sop);
    this.setState({ sop: "clicked" }, () => {
      console.log(this.state.sop);
    });
  };

  tick = () => {
    console.log(this.state.curr);
  };

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={this.state.blah}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="find">
            <Link to="/find">Find</Link>
          </Menu.Item>
          <Menu.Item key="surpriseme">
            <Link to="/surpriseme">Surprise Me</Link>
          </Menu.Item>
          <Menu.Item key="recommended">
            <Link to="/recommended">Recommended</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
        <h1 onClick={this.handleClick}>CLICK ME</h1>
      </div>
    );
  }
}

export default Nav;
