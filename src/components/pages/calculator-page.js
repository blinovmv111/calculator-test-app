import React from "react";
import Calculator from "../calculator";
import Spinner from "../spinner";
import { connect } from "react-redux";

const CalculatorPage = (props) => {
  const { loading } = props;

  const spinnerVisible = loading ? <Spinner /> : "";
  return (
    <div>
      <Calculator />
      {spinnerVisible}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(CalculatorPage);
