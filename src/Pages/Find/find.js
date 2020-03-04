import React from "react";
import Nav from "../../Shared/nav";
import SearchForm from "./form/search-form";
import "./find.scss";
import Context from "../../Store/context";
import FindResults from "./results";
import axios from "axios";
import { Pagination, Row } from "antd";
import Details from "../../Shared/details";

// DATA IS EITHER FETCHED ON FORM SUBMIT, NEW PAGE(PAGINATION) CLICK, OR BUSINESS CARD CLICK
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
        offset: 0,
        detail: -1,
        detail_results: undefined
      }
    };
  }

  //FETCHES APPROPRIATE DATA
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

  //FETCHES DETAIL DATA
  fetchDetails = async () => {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/${
          this.state.curr_form.detail
        }`,
        {
          headers: {
            Authorization: process.env.REACT_APP_YELP_KEY
          }
        }
      )
      .then(res => {
        this.setState({
          curr_form: {
            ...this.state.curr_form,
            detail_results: res,
            is_loading: false
          }
        });
      })
      .catch(err => {
        this.setState({
          curr_form: {
            ...this.state.curr_form,
            detail_results: null,
            is_loading: false
          }
        });
      });
  };

  //FETCHES DATA ON SUBMIT
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

  //FETCHES DETAILS ABOUT BUSINESS
  get_details = id => {
    this.setState(
      {
        curr_form: {
          ...this.state.curr_form,
          detail: id,
          is_loading: true
        }
      },
      () => this.fetchDetails()
    );
  };

  //FETCHES DATA WITH OFFSET WHEN PAGE NUM CHANGES (PAGINATION)
  handlePagination = pageNumber => {
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

  //UPDATES FORM VALUES FROM CHILD COMPONENTS
  update_curr_form = (prop, value) => {
    this.setState({
      curr_form: {
        ...this.state.curr_form,
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
          <Row gutter={[16, 16]} type="flex" justify="center">
            {this.state.curr_form.detail === -1 ? ( //SHOW MAIN DATA PAGE OR BUESINESS DETAILS
              <FindResults
                curr_form={this.state.curr_form}
                get_details={this.get_details}
              />
            ) : (
              <Details
                curr_form={this.state.curr_form}
                update_curr_form={this.update_curr_form}
              />
            )}
          </Row>
          <Row gutter={[16, 16]} type="flex" justify="center">
            {this.state.curr_form.results !== null && //RAN INTO ERROR FETCHING RESULTS
            this.state.curr_form.results !== undefined && //USER JUST ENTERED PAGE
            this.state.curr_form.is_loading === false && //IS NOT LOADING
            this.state.curr_form.detail === -1 && //NOT DETAILS PAGE
            this.state.curr_form.results.data.businesses.length > 0 ? ( //RESULTS ARE NOT EMPTY
              <Pagination //IF ALL CHECKS PASS, ONLY THEN SHOW PAGINATION STUFF
                total={
                  this.state.curr_form.results.data.total > 999 //YELP ONLY ALLOWS 1000 ITEMS RETURN PER QUERY
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
          </Row>
        </div>
      </div>
    );
  }
}
Find.contextType = Context;

export default Find;
