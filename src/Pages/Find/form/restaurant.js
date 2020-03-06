import React from "react";
import {
  Row,
  Col,
  Select,
  TreeSelect,
  Slider,
  Radio,
  Checkbox,
  Form
} from "antd";
import UserLocation from "../../../Shared/user-location";
const { Option } = Select;
const { TreeNode } = TreeSelect;

const Restaurant = props => {
  return (
    <div>
      <h4>Location</h4>
      <UserLocation />
      <br />
      <h4>Category</h4>
      <TreeSelect
        showSearch
        style={{ width: "100%" }}
        value="leaf2"
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder="Please select"
        treeDefaultExpandAll
      >
        <TreeNode value="parent 1" title="parent 1">
          <TreeNode value="parent 1-0" title="parent 1-0">
            <TreeNode value="leaf1" title="my leaf" />
            <TreeNode value="leaf2" title="your leaf" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    </div>
  );
};

export default Restaurant;
