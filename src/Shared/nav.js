import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "../Store/context";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const Nav = props => {
  const { state, actions } = useContext(Context);
  useEffect(() => {
    actions({
      type: "setState",
      payload: { ...state, selected: props.selected }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Header>
      <Menu
        onClick={e =>
          actions({
            type: "setState",
            payload: { ...state, selected: e.key }
          })
        }
        selectedKeys={state.selected}
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
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
      </Menu>
    </Header>
  );
};

export default Nav;
