import React, { Component } from "react";
import "./app-header.scss";
import { Link } from "react-router-dom";

class Calculator extends Component {
  render() {
    return (
      <header>
        <div className="btn-wrapper">
          <div className="btn btn--calculator">
            <Link to="/calculatorPage/" className="link">
              Калькулятор
            </Link>
            {/* <a href="#">Калькулятор</a> */}
          </div>
          <div className="btn btn--text">
            <Link to="/textPage/" className="link">
              Текстовая
            </Link>
            {/* <a href="#">Текстовая</a> */}
          </div>
        </div>
      </header>
    );
  }
}

export default Calculator;
