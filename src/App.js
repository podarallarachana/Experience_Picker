import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Find from "./Pages/Find/find";
import SurpiseMe from "./Pages/SurpriseMe/surprise";
import Recommended from "./Pages/Recommended/recommended";
require("dotenv").config();

class App extends React.Component {
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
