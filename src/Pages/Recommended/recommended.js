import React from "react";
import Nav from "../../Shared/nav";
import UserLocation from "../../Shared/user-location";

class Recommended extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav selected="recommended" />
        <UserLocation />
      </div>
    );
  }
}

export default Recommended;
