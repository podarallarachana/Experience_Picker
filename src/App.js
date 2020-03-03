import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Find from "./Pages/Find/find";
import SurpiseMe from "./Pages/SurpriseMe/surprise";
import Recommended from "./Pages/Recommended/recommended";
import Context from "./Store/context";
import Geocode from "react-geocode";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

let coords = "";
let address = "";

function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        coords = position.coords.latitude + " " + position.coords.longitude;
        callback();
      },
      function(error) {
        coords = "NA";
        callback();
      }
    );
  } else {
    coords = "NA";
    callback();
  }
}

const App = props => {
  const { state, actions } = useContext(Context);

  useEffect(() => {
    //get current page
    let curr = window.location.href.split("/").pop();
    if (curr === "") {
      curr = "home";
    }

    getLocation(function() {
      console.log(coords);
      // Get address from latidude & longitude.
      Geocode.fromLatLng("44.93833465644594", "-92.89044200576455").then(
        response => {
          const address = response.results[0].formatted_address;
          console.log(address);
        },
        error => {
          console.error(error);
        }
      );

      actions({
        type: "setState",
        payload: {
          ...state,
          selected: curr,
          coords: coords
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
};

export default App;
