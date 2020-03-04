import React from "react";
import Nav from "./nav";
import Context from "../Store/context";

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Nav selected="about" />
        <h1>ITEM DETAILS: {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default ItemDetails;
