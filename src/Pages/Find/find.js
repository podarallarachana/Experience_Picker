import React from "react";
import Nav from "../../Shared/nav";
import SearchForm from "./search-form";
import "./find.scss";
import Context from "../../Store/context";
import FindResults from "./results";
import axios from "axios";
import { Pagination } from "antd";

class Find extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_form: {
        is_loading: false,

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

        pageNum: 1,
        results: undefined,
        offset: 0
      }
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
            limit: 50,
            offset: this.state.curr_form.offset
          }
        }
      )
      .then(res => {
        this.setState({
          curr_form: {
            ...this.state.curr_form,
            results: res,
            is_loading: false
          }
        });
      })
      .catch(err => {
        this.setState({
          curr_form: {
            ...this.state.curr_form,
            results: null,
            is_loading: false
          }
        });
      });
  };

  submit_curr_form = () => {
    if (this.context.state.val_status === "success") {
      this.setState(
        {
          curr_form: {
            ...this.state.curr_form,
            is_loading: true,
            offset: 0,
            pageNum: 1
          }
        },
        () => {
          this.fetchData();
        }
      );
    }
  };

  update_curr_form = (prop, value) => {
    this.setState({
      curr_form: {
        ...this.state.curr_form,
        [prop]: value
      }
    });
  };

  handlePagination = pageNumber => {
    console.log(pageNumber);
    this.setState(
      {
        curr_form: {
          ...this.state.curr_form,
          is_loading: true,
          offset: (pageNumber - 1) * 50,
          pageNum: pageNumber
        }
      },
      () => this.fetchData()
    );
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
          <FindResults curr_form={this.state.curr_form} />
          {this.state.curr_form.results !== null &&
          this.state.curr_form.results !== undefined &&
          this.state.curr_form.is_loading === false &&
          this.state.curr_form.results.data.businesses.length > 0 ? (
            <Pagination
              total={
                this.state.curr_form.results.data.total > 999
                  ? 999
                  : this.state.curr_form.results.data.total
              }
              showTotal={total => `Total ${total} items`}
              pageSize={50}
              defaultCurrent={this.state.curr_form.pageNum}
              onChange={this.handlePagination}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
Find.contextType = Context;

export default Find;
