import React from "react";
import Nav from "../../Shared/nav";
import SearchForm from "./search-form";
import "./find.scss";
import Context from "../../Store/context";

class Find extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_form: {
        address: "",
        distance: "10",

        res_category: "",
        res_subcategory: "",
        res_rating: "",
        res_price: "",
        res_open: "",

        rec_category: "",
        rec_subcategory: "",
        rec_rating: "",
        rec_price: "",
        rec_open: "",

        ev_category: "",
        ev_available: "",
        ev_free: "",

        search_by: ""
      }
    };
  }

  update_curr_form = (prop, value) => {
    this.setState({
      [prop]: value
    });
  };

  render() {
    return (
      <div>
        <Nav selected="find" />
        <div style={{ padding: "0 50px" }}>
          <h1>Find something for you!</h1>
          <SearchForm
            curr_form={this.state.curr_form}
            update_curr_form={this.update_curr_form}
          />
        </div>
      </div>
    );
  }
}
Find.contextType = Context;

export default Find;
