import React from "react";
import Nav from "../../Shared/nav";
import SearchForm from "./search-form";
import "./find.scss";
import Context from "../../Store/context";
import FindResults from "./find-results";

class Find extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_form: {
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
      curr_form: {
        [prop]: value
      }
    });
  };

  render() {
    return (
      <div>
        <Nav selected="find" />
        <div style={{ padding: "0 50px" }}>
          <SearchForm
            curr_form={this.state.curr_form}
            update_curr_form={this.update_curr_form}
          />
          <br />
          <FindResults curr_form={this.state.curr_form} />
        </div>
      </div>
    );
  }
}
Find.contextType = Context;

export default Find;
