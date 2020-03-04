import React from "react";
import Nav from "../../Shared/nav";
import SearchForm from "./search-form";
import "./find.scss";
import Context from "../../Store/context";
import FindResults from "./results";
import axios from "axios";

class Find extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: false,
      curr_form: {
        distance: "40000",

        res_category: "banana",
        res_subcategory: "",
        res_rating: "",
        res_price: "$",
        res_open: false,

        rec_category: "",
        rec_subcategory: "",
        rec_rating: "",
        rec_price: "",
        rec_open: false,

        ev_category: "",
        ev_available: "",
        ev_free: "",

        search_by: ""
      },
      results: undefined
    };
  }

  fetchData = async () => {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search`,
        {
          headers: {
            Authorization: process.env.REACT_APP_YELP_KEY
          },
          params: {
            latitude: this.context.state.lat,
            longitude: this.context.state.long,
            radius: this.state.curr_form.distance,
            limit: 50
          }
        }
      )
      .then(res => {
        this.setState({
          results: res,
          is_loading: false
        });
      })
      .catch(err => {
        this.setState({
          results: null,
          is_loading: false
        });
      });
  };

  submit_curr_form = () => {
    if (this.context.state.val_status === "success") {
      this.setState(
        {
          is_loading: true
        },
        () => this.fetchData()
      );
    }
  };

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
            submit_curr_form={this.submit_curr_form}
          />
          <br />
          <FindResults
            curr_form={this.state.curr_form}
            results={this.state.results}
            is_loading={this.state.is_loading}
          />
        </div>
      </div>
    );
  }
}
Find.contextType = Context;

export default Find;
