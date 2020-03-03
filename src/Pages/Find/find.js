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
      curr_form: {
        distance: "1000",

        res_category: "banana",
        res_subcategory: "",
        res_rating: "",
        res_price: "$",
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
      },
      results: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  update_curr_form = (prop, value) => {
    this.setState(
      {
        curr_form: {
          [prop]: value,
          res_category: "tomato"
        }
      },
      () => this.fetchData()
    );
  };

  fetchData = async () => {
    await axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search`,
        {
          headers: {
            Authorization: process.env.REACT_APP_YELP_KEY
          },
          params: {
            location: "san francisco",
            term: this.state.curr_form.res_category
            // latitude: this.context.lat,
            // longitude: this.context.long
          }
        }
      )
      .then(res => {
        this.setState({ results: res });
      })
      .catch(err => {
        this.setState({ results: null });
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
          <FindResults
            curr_form={this.state.curr_form}
            results={this.state.results}
          />
        </div>
      </div>
    );
  }
}
Find.contextType = Context;

export default Find;
