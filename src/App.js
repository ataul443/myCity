import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/screens/home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers/reducer";

const dataStore = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={dataStore}>
        <HomeScreen />
      </Provider>
    );
  }
}
