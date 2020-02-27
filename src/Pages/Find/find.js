import React from "react";
import Nav from "../../Shared/nav";
import SearchForm from "./search-form";
import Context from "../../Store/context";
import "./find.scss";

class Find extends React.Component {
  render() {
    return (
      <div>
        <Nav selected="find" />
        <div style={{ padding: "0 50px" }}>
          <h1>Find something fun to do!</h1>
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default Find;
