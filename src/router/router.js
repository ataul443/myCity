import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import LoginScr from "../components/screens/login_scr";
import NGO from "../containers/ngo_form";

class MainRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={LoginScr} hideNavBar initial />
          <Scene key="ngo" component={NGO} hideNavBar />
        </Scene>
      </Router>
    );
  }
}

export default MainRouter;
