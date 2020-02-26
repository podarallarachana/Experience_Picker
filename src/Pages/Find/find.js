import React from "react";
import Nav from "../../Shared/nav";
import Context from "../../Store/context";

class Find extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="App">
        <Nav selected="find" />
        <h1>{this.context.state.selected}</h1>
      </div>
    );
  }
}

export default Find;
