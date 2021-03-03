import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import "./index.scss";
import App from "./components/App/App";

const initialState = {
  isCheckedAll: false,
  isCheckedNo: false,
  isCheckedOne: false,
  isCheckedTwo: false,
  isCheckedThree: false
}

const toggleCheckbox = (state, stateProperty) => {
  const updatedState = {...state, [stateProperty]: !state[stateProperty]}
  return (Object.entries(updatedState).slice(1).every((item) => item[1])) ? {...updatedState, isCheckedAll: true} : {...updatedState, isCheckedAll: false};
}

const toggleCheckboxAll = (state) => Object.entries(state).reduce((acc, curr) => ({...acc, [curr[0]]: !state.isCheckedAll}), {});

// eslint-disable-next-line
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_CHECKED":
      return toggleCheckboxAll(state);
    case "NO_CHECKED":
      return toggleCheckbox(state, "isCheckedNo");
    case "ONE_CHECKED":
      return toggleCheckbox(state, "isCheckedOne");
    case "TWO_CHECKED":
      return toggleCheckbox(state, "isCheckedTwo");
    case "THREE_CHECKED":
      return toggleCheckbox(state, "isCheckedThree");
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
