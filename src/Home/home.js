import React from "react";
import Nav from "../Shared/nav";

class Home extends React.Component {
  state = {
    sop: "firs",
    num: 10
  };

  componentDidMount() {
    console.log(this.state.sop);
    this.setState({ sop: "sec" }, () => {
      console.log(this.state.sop);
    });
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default Home;
