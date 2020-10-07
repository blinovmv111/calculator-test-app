import React, { Component } from "react";
import "./textBlock.scss";

class TextBlock extends Component {
  render() {
    return (
      <div className="text-block">
        <h2 className="title">Текстовая страница</h2>
        <p>
          Это простая текстовая страница для <br></br>
          отображения параметров роута. Параметры: <br></br>- id: xxxx <br></br>
          - date: xxxx
        </p>
      </div>
    );
  }
}

export default TextBlock;
