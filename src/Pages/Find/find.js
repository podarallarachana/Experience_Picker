import React from "react";
import Nav from "../../Shared/nav";
import SearchForm from "./search-form";
import "./find.scss";
import Context from "../../Store/context";

class Find extends React.Component {
  render() {
    return (
      <div>
        <Nav selected="find" />
        <div style={{ padding: "0 50px" }}>
          <h1>{this.context.state.selected}</h1>
          <h1>{this.context.state.coords}</h1>
          <SearchForm />
        </div>
      </div>
    );
  }
}
Find.contextType = Context;

export default Find;
