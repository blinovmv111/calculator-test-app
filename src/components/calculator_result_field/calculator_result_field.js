import React from "react";
import "./calculator_result_field.scss";

const CalculatorResultField = ({ inputSum, dollarRate, outputSum }) => {
  return (
    <div className="result">
      <span>{inputSum} грн</span> по курсу <span>{dollarRate} $</span> это{" "}
      <span>{outputSum} $</span>
    </div>
  );
};

export default CalculatorResultField;
