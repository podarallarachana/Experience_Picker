import React, { useContext, useState, useEffect } from "react";
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
      payload: { ...state, address: address, isLoading: "warning" }
    });
  };

  const handleSelect = address => {
    let lat = "";
    let long = "";

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        lat = latLng.lat;
        long = latLng.long;
      })
      .catch(error => {
        lat = "NA";
        long = "NA";
      });

    actions({
      type: "setState",
      payload: {
        ...state,
        address: address,
        lat: lat,
        long: long,
        isLoading: "success"
      }
    });
  };

  const onError = (status, clearSuggestions) => {
    clearSuggestions();
    actions({
      type: "setState",
      payload: { ...state, isLoading: "error" }
    });
  };

  return (
    <Row gutter={[16, 16]} type="flex" justify="center">
      <h1>{state.long}</h1>
      <br />
      <h2>{state.lat}</h2>
      <br />
      <h3>{state.address}</h3>
      <br />
      <Col xs={24} sm={24} md={12} lg={10} xl={10}>
        <PlacesAutocomplete
          value={state.address}
          onChange={handleChange}
          onSelect={handleSelect}
          onClick={handleSelect}
          onError={onError}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <Form>
                <Form.Item
                  label="Address"
                  hasFeedback
                  validateStatus={state.isLoading}
                >
                  <Input
                    {...getInputProps({
                      placeholder: state.address,
                      className: "location-search-input"
                    })}
                  />
                </Form.Item>
              </Form>
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
      </Col>
    </Row>
  );
};

export default UserLocation;
