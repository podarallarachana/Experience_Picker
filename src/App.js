import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Find from "./Pages/Find/find";
import SurpiseMe from "./Pages/SurpriseMe/surprise";
import Recommended from "./Pages/Recommended/recommended";

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

  user_coords = "banana";

  getLocation = () => {
    console.log("getLoc?");
    if (navigator.geolocation) {
      console.log("works?");
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.showError
      );
    } else {
      this.user_coords = "Geolocation is not supported by this browser.";
    }
  };

  showPosition = position => {
    console.log(
      "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude
    );
    this.user_coords =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  };

  showError = error => {
    console.log("NOT_AVAILABLE");
  };

  componentDidMount() {
    this.getLocation();
    console.log(this.user_coords);
  }

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
