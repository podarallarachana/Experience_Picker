import React from "react";
import axios from "axios";
import "./App.css";
require("dotenv").config();

class App extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    console.log(process.env.REACT_APP_WORKING);
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY
          },
          params: {
            categories: "breakfast_brunch"
          }
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("error");
      });
  }

  render() {
    return <p>{this.state.persons.id}</p>;
  }
}

export default App;
