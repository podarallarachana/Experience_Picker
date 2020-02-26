import React from "react";
import Nav from "../Shared/nav";

class Home extends React.Component {
  state = {
    sop: "firs",
    num: 10
  };

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default Home;
