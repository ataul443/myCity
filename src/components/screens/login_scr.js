import React, { Component } from "react";

import BasePage from "../basic_components/base_page";
import LoginForm from "../../containers/login_form";

class LoginScr extends Component {
  render() {
    return <BasePage withForm={<LoginForm />} />;
  }
}

export default LoginScr;
