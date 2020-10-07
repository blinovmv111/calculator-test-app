import React, { Component } from "react";
import { dataLoaded, dataRequested, dataError } from "../../actions";
import "./calculator.scss";
import { connect } from "react-redux";
import WithApiService from "../hoc";
import Spinner from "../spinner";
import Error from "../error";

class Calculator extends Component {
  componentDidMount() {
    const { dataLoaded, dataRequested, dataError, ApiService } = this.props;
    dataRequested();

    ApiService.getDollarSale()
      .then((res) => dataLoaded(res))
      .catch(() => dataError());
  }

  onValueChange(e) {
    console.log(e.target.value);
  }

  render() {
    const { inputSum, dollarRate, outputSum, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error />;
    }

    return (
      <div className="calculator">
        <h1 className="title">Калькулятор</h1>
        <form className="inputBlock">
          <input
            type="text"
            placeholder="Сумма, грн"
            onChange={this.onValueChange}
          ></input>
          <div className="result">
            <span>{inputSum}грн</span> по курсу <span>{dollarRate}$</span> это{" "}
            <span>{outputSum}$</span>
          </div>
        </form>
        <button type="submit" className="btn btn--count">
          Посчитать
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    outputSum: state.outputSum,
    inputSum: state.inputSum,
    dollarRate: state.dollarRate,
  };
};

const mapDispatchToProps = {
  dataLoaded,
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
