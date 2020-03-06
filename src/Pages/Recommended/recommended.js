import React from "react";
import Nav from "../../Shared/nav";
import UserLocation from "../../Shared/user-location";
import Reqsults from "./results";

class Recommended extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav selected="recommended" />
        <Reqsults />
      </div>
    );
  }
}

export default Recommended;
