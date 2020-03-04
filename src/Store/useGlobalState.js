import { useState } from "react";

const useGlobalState = () => {
  const [state, setState] = useState({
    selected: "",
    lat: "-1",
    long: "-1",
    address: "loading...",
    val_status: "validating"
  });

  const actions = action => {
    const { type, payload } = action;
    switch (type) {
      case "setState":
        return setState(payload);
      default:
        return state;
    }
  };
  return { state, actions };
};

export default useGlobalState;
