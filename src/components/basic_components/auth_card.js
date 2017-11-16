import React, { Component } from "react";
import { View } from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";
import { Field, reduxForm } from "redux-form";
import RFButton from "./rf-button";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { UserDataAction } from "../../actions/action_user_data";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Card,
  CardItem,
  Item,
  Input,
  Form,
  Label
} from "native-base";

var ema1, pass1;

const validate = values => {
  const error = {};
  error.email = "";
  error.password = "";

  var ema = values.email;
  var pass = values.password;

  if (values.email === undefined) {
    ema = "";
  }
  if (values.password === undefined) {
    pass = "";
  }

  ema < 6 && ema !== "" ? (error.email = "Email must be > 6") : (ema1 = ema);

  pass < 6 && pass !== ""
    ? (error.password = "Password must be > 6")
    : (pass1 = pass);
  !ema.includes("@") && ema !== ""
    ? (error.email = "@ must be in email")
    : (ema1 = ema);

  return error;
};

class AuthCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: true,
      frame: "",
      sum: "0"
    };
    this.submit = this.submit.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  submit = values => {
    console.log(values.email);
    console.log(values.password);
  };

  renderInput({ input, label, type, meta: { touche, error, warning } }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <View style={{ width: 370, marginRight: 10 }}>
        <Item floatingLabel error={hasError}>
          <Label>{label}</Label>
          <Input
            {...input}
            secureTextEntry={label == "Password" ? true : false}
          />
        </Item>
        {touche ? (
          <Text />
        ) : (
          <Text style={{ paddingBottom: 10, paddingLeft: 10 }}>{error}</Text>
        )}
      </View>
    );
  }
  render() {
    if (!this.state.isReady) {
      return (
        <View>
          <Text>Loading....</Text>
        </View>
      );
    }
    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Form>
                <Field
                  name="email"
                  label="Username or Email"
                  component={this.renderInput}
                  style={{ width: 80 }}
                />
                <Field
                  name="password"
                  label="Password"
                  component={this.renderInput}
                  style={{ width: 80 }}
                />

                <RFButton
                  text="Submit"
                  onSubmit={this.props.handleSubmit(this.submit)}
                  buttonText="Log In"
                />
              </Form>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

reduxForm({
  form: "authform",
  validate
})(AuthCard);

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ actionUser: UserDataAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCard);
