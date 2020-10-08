import React, { useEffect } from "react";
import {
  dollarRateLoaded,
  inputSumFunction,
  resultSumFunction,
  writeDataForDisplay,
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
    resultSum,
    displayDollarRate,
    displayInputSum,
    displayResultSum,
    visibleResult,
    error,
    dollarRateLoaded,
    inputSumFunction,
    resultSumFunction,
    writeDataForDisplay,
    toggleVisibleResult,
    dataRequested,
    dataError,
  } = props;

  useEffect(() => {
    dataRequested();

    ApiService.getDollarSale()
      .then((res) => dollarRateLoaded(res))
      .then(() => console.log(dollarRate, inputSum, resultSum))
      .catch(() => dataError());
  }, []);

  function changeInputHendler(e) {
    console.log(e.target.value);
    if (!isNaN(e.target.value) && isFinite(e.target.value)) {
      inputSumFunction(+e.target.value);
      console.log(inputSum);
      resultSumFunction(Math.floor(+e.target.value * dollarRate * 100) / 100);
      console.log(dollarRate, inputSum, resultSum);
    } else {
      inputSumFunction("Введите число!");
    }
  }

  const field = visibleResult && (
    <CalculatorResultField
      displayInputSum={displayInputSum}
      displayDollarRate={displayDollarRate}
      displayResultSum={displayResultSum}
    />
  );

  function countUp() {
    dataRequested();
    ApiService.getDollarSale()
      .then((res) => dollarRateLoaded(res))
      .then(() => writeDataForDisplay())
      .then(() => toggleVisibleResult())
      .catch(() => dataError());
  }

  function submitHendler(e) {
    e.preventDefault();
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="calculator">
      <h1 className="title">Калькулятор</h1>
      <form className="inputBlock" onSubmit={submitHendler}>
        <input
          type="text"
          placeholder="Сумма, грн"
          onChange={changeInputHendler}
          // value={inputSum}
        />
        <div className="calculator__result-wrap">{field}</div>

        <button type="submit" className="btn btn--count" onClick={countUp}>
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
    resultSum: state.resultSum,
    displayDollarRate: state.displayDollarRate,
    displayInputSum: state.displayInputSum,
    displayResultSum: state.displayResultSum,
    visibleResult: state.visibleResult,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  dollarRateLoaded,
  inputSumFunction,
  resultSumFunction,
  toggleVisibleResult,
  writeDataForDisplay,
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
