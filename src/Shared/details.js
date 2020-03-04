import React, { useContext } from "react";
import { Button } from "antd";
import Context from "../Store/context";
import {
  AntDesignOutline,
  DashboardOutline,
  TwitterOutline
} from "@ant-design/icons";
import AntdIcon from "@ant-design/icons-react";
AntdIcon.add(AntDesignOutline, DashboardOutline);

const Details = props => {
  const { state } = useContext(Context);

  return (
    <div>
      <Button
        type="primary"
        shape="circle"
        onClick={e => props.update_curr_form("detail", -1)}
      >
        <AntdIcon type={TwitterOutline} />
      </Button>
    </div>
  );
};

export default Details;
