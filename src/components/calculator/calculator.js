import React, { useEffect } from "react";
import {
  dollarRateLoaded,
  inputSumLoaded,
  outputSumLoaded,
  toggleVisibleResult,
  dataRequested,
  dataError,
} from "../../actions";
import "./calculator.scss";
import { connect } from "react-redux";
import WithApiService from "../hoc";
import Error from "../error";
import CalculatorResultField from "../calculator_result_field";

const Calculator = (props) => {
  const {
    ApiService,
    dollarRate,
    inputSum,
    outputSum,
    visibleResult,
    error,
    dollarRateLoaded,
    inputSumLoaded,
    outputSumLoaded,
    toggleVisibleResult,
    dataRequested,
    dataError,
  } = props;

  useEffect(() => {
    dataRequested();

    ApiService.getDollarSale()
      .then((res) => dollarRateLoaded(res))
      .catch(() => dataError());
  }, []);

  function onInputValueChange(e) {
    if (!isNaN(e.target.value) && isFinite(e.target.value)) {
      inputSumLoaded(e.target.value);
      outputSumLoaded(Math.floor(+e.target.value * dollarRate * 100) / 100);
    } else {
      inputSumLoaded("Введите число!");
    }
  }

  const field = visibleResult && (
    <CalculatorResultField
      inputSum={inputSum}
      dollarRate={dollarRate}
      outputSum={outputSum}
    />
  );

  function onToggleVisibleResult() {
    dataRequested();
    ApiService.getDollarSale()
      .then((res) => dollarRateLoaded(res))
      .then(() => toggleVisibleResult())
      .catch(() => dataError());
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="calculator">
      <h1 className="title">Калькулятор</h1>
      <form className="inputBlock" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Сумма, грн"
          onChange={onInputValueChange}
          // value={inputSum}
        />
        <div className="calculator__result-wrap">{field}</div>

        <button
          type="submit"
          className="btn btn--count"
          onClick={onToggleVisibleResult}
        >
          Посчитать
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dollarRate: state.dollarRate,
    inputSum: state.inputSum,
    outputSum: state.outputSum,
    visibleResult: state.visibleResult,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  dollarRateLoaded,
  inputSumLoaded,
  outputSumLoaded,
  toggleVisibleResult,
  dataRequested,
  dataError,
};

export default WithApiService()(
  connect(mapStateToProps, mapDispatchToProps)(Calculator)
);

// componentDidMount() {
//   this.apiService.getData().then((res) =>
//     res.forEach((obj) => {
//       for (let prop in obj) {
//         if (prop === "ccy" && obj[prop] === "USD") {
//           console.log(obj.sale);
//           return obj.sale;
//         } else {
//           continue;
//         }
//       }
//     })
//   );
// }
