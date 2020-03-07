import React, { useContext } from "react";
import { Button } from "antd";
import Context from "../Store/context";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import {
  AntDesignOutline,
  DashboardOutline,
  TwitterOutline
} from "@ant-design/icons";
import AntdIcon from "@ant-design/icons-react";
AntdIcon.add(AntDesignOutline, DashboardOutline);

const Details = props => {
  const { state } = useContext(Context); //GLOBAL STATE COORDS RATHER THAN DETAIL COORDS, SO GOOGLE MAPS DOESN'T NEED TO WAIT FOR PAGE TO LOAD    <div>

  const WrappedMap = withGoogleMap(Map);

  function Map() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
      />
    );
  }

  return (
    <div>
      <Button
        type="primary"
        shape="circle"
        onClick={e => props.update_curr_form("detail", -1)}
      >
        <AntdIcon type={TwitterOutline} />
        BACK
      </Button>
      ?
      <p>
        {props.curr_form.detail_results //ADD CATCH ERROR/LOADING
          ? props.curr_form.detail_results.data.name
          : "LOADING"}
      </p>
      <WrappedMap
        loadingElement={<div style={{ height: `300px`, width: "100%" }} />}
        containerElement={<div style={{ height: `300px`, width: "100%" }} />}
        mapElement={<div style={{ height: `300px`, width: "100%" }} />}
      />
    </div>
  );
};

export default Details;
