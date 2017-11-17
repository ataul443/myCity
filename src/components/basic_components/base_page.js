import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";

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

class BasePage extends Component {
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
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>
        <Grid>
          <Row size={75}>{this.props.withForm}</Row>
        </Grid>
      </Container>
    );
  }
}

export default BasePage;
