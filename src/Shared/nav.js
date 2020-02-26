import React, { useContext, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Context from "../Store/context";

const Nav = props => {
  const { state, actions } = useContext(Context);

  useEffect(() => {
    actions({
      type: "setState",
      payload: { state, selected: props.selected }
    });
  }, []);

  return (
    <div>
      <Menu
        onClick={e =>
          actions({
            type: "setState",
            payload: { state, selected: e.key }
          })
        }
        selectedKeys={state.selected}
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
    </div>
  );
};

export default Nav;
