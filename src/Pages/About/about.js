import React from "react";
import Nav from "../../Shared/nav";

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav selected="about" />
        <h1>{this.context.state.coords}</h1>
      </div>
    );
  }
}

// export default graphql(getQuery)(About);
export default About;
