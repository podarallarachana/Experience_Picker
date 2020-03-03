import React from "react";
import Nav from "../../Shared/nav";
import UserLocation from "../../Shared/user-location";

class SurpriseMe extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav selected="surpriseme" />
        <UserLocation />
      </div>
    );
  }
}

export default SurpriseMe;
