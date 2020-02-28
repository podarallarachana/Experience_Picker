import React from "react";
import Nav from "../../Shared/nav";
import Context from "../../Store/context";

class About extends React.Component {
  static contextType = Context;
  render() {
    return (
      <div className="App">
        <Nav selected="about" />
        <h1>{this.context.state.coords}</h1>
      </div>
    );
  }
}
About.contextType = Context;

// export default graphql(getQuery)(About);
export default About;
