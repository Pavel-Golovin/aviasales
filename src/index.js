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
// eslint-disable-next-line
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_CHECKED":
      if (state.isCheckedAll === false) {
        return {
          isCheckedAll: true,
          isCheckedNo: true,
          isCheckedOne: true,
          isCheckedTwo: true,
          isCheckedThree: true
        }
      }
      if (state.isCheckedAll === true) {
        return {
          isCheckedAll: false,
          isCheckedNo: false,
          isCheckedOne: false,
          isCheckedTwo: false,
          isCheckedThree: false
        }
      }
      break;
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
