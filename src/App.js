import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/home";
import About from "./About/about";
import Find from "./Find/find";
import SurpiseMe from "./SurpiseMe/surprise";
import Recommended from "./Recommended/recommended";
require("dotenv").config();

class App extends React.Component {
  state = {
    curr: "home",
    num: 5
  };

  componentDidMount() {
    console.log(this.state.num);
    this.setState({ num: 6 }, () => {
      console.log(this.state.num);
    });
  }
  // componentDidMount() {
  //   axios
  //     .get(
  //       `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw`,
  //       {
  //         headers: {
  //           Authorization: process.env.REACT_APP_API_KEY
  //         },
  //         params: {
  //           categories: "breakfast_brunch"
  //         }
  //       }
  //     )
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log("error");
  //     });
  // }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/find" component={Find} />
          <Route path="/recommended" component={Recommended} />
          <Route path="/surpriseme" component={SurpiseMe} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
