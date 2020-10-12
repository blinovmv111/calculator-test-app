import React, { useEffect } from "react";
import * as actions from "../../actions";
import "./calculator.scss";
import { connect } from "react-redux";
import WithApiService from "../hoc";
import Error from "../error";
import CalculatorResultField from "../calculator_result_field";

const Calculator = (props) => {
  const {
    ApiService,
    dollarRate,
    // inputSum,
    // resultSum,
    displayDollarRate,
    displayInputSum,
    displayResultSum,
    visibleResult,
    error,
    // dollarRateLoaded,
    inputSumFunction,
    resultSumFunction,
    writeDataForDisplay,
    toggleVisibleResult,
    // dataRequested,
    dataError,
    loadData,
    putData,
  } = props;

  useEffect(() => {
    loadData();
    ApiService.getDollarSale()
      .then((res) => putData(res))
      .catch(() => dataError());
  }, []);

  function changeInputHandler(e) {
    if (!isNaN(e.target.value) && isFinite(e.target.value)) {
      inputSumFunction(+e.target.value);
      resultSumFunction(Math.floor(+e.target.value * dollarRate * 100) / 100);
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

  const countUp = async () => {
    await loadData();
    await writeDataForDisplay();
    await toggleVisibleResult();

    // ApiService.getDollarSale()
    //   .then((res) => dollarRateLoaded(res))
    //   .then(() => writeDataForDisplay())
    //   .then(() => toggleVisibleResult())
    //   .catch(() => dataError());
  };

  function submitHandler(e) {
    e.preventDefault();
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="calculator">
      <h1 className="title">Калькулятор</h1>
      <form className="inputBlock" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Сумма, грн"
          onChange={changeInputHandler}
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

// const mapDispatchToProps = {
//   dollarRateLoaded,
//   inputSumFunction,
//   resultSumFunction,
//   toggleVisibleResult,
//   writeDataForDisplay,
//   dataRequested,
//   dataError,
// };

export default WithApiService()(connect(mapStateToProps, actions)(Calculator));

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
