import React, { Component } from "react";
import TextBlock from "../textBlock";

class TextPage extends Component {
  render() {
    return <TextBlock id={this.props.id} />;
  }
}

export default TextPage;
