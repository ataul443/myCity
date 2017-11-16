import React, { Component } from "react";
import { Button, Text } from "native-base";

class RFButton extends Component {
  render() {
    return (
      <Button block primary onPress={this.props.onSubmit}>
        <Text>{this.props.buttonText}</Text>
      </Button>
    );
  }
}

export default RFButton;
