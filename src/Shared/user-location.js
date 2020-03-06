import React, { useContext } from "react";
import { Row, Col, Form, Input } from "antd";
import Context from "../Store/context";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const UserLocation = props => {
  const { state, actions } = useContext(Context);

  const handleChange = address => {
    actions({
      type: "setState",
      payload: { ...state, address: address, val_status: "warning" }
    });
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        actions({
          type: "setState",
          payload: {
            ...state,
            address: address,
            lat: latLng.lat,
            long: latLng.lng,
            val_status: "success"
          }
        });
      })
      .catch(error => {
        actions({
          type: "setState",
          payload: {
            ...state,
            address: address,
            val_status: "warning"
          }
        });
      });
  };

  const onError = (status, clearSuggestions) => {
    clearSuggestions();
    actions({
      type: "setState",
      payload: { ...state, val_status: "warning" }
    });
  };

  return (
    <PlacesAutocomplete
      value={state.address}
      onChange={handleChange}
      onSelect={handleSelect}
      onClick={handleSelect}
      onError={onError}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <Input
            allowClear
            {...getInputProps({
              placeholder: state.address,
              className: "location-search-input"
            })}
            disabled={state.address === "loading..." ? true : false}
          />

          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default UserLocation;
