import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Router from "./router/router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import allReducers from "./reducers/reducer";
import thunk from "redux-thunk";

const dataStore = createStore(
  allReducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
);

export default class App extends Component {
  render() {
    return (
      <Provider store={dataStore}>
        <Router />
      </Provider>
    );
  }
}
