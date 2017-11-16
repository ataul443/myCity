import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";
import AuthForm from "../basic_components/auth_card";

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
  Spinner
} from "native-base";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authState: false
    };
  }

  spinnerLoader = () => {
    if (!this.state.authState) {
      <Spinner />;
    }
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home Screen</Title>
          </Body>
          <Right />
        </Header>
        <Grid>
          <Row size={75}>
            <AuthForm />
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default HomeScreen;
