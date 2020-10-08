import React from "react";
import "./calculator_result_field.scss";

const CalculatorResultField = ({
  displayDollarRate,
  displayInputSum,
  displayResultSum,
}) => {
  return (
    <div className="result">
      <span>{displayInputSum} грн</span> по курсу{" "}
      <span>{displayDollarRate} $</span> это <span>{displayResultSum} $</span>
    </div>
  );
};

export default CalculatorResultField;
