const dollarRateLoaded = (data) => {
  return {
    type: "DOLLAR_RATE_LOADED",
    payload: data,
  };
};

const inputSumFunction = (data) => {
  return {
    type: "INPUT_SUM_FUNCTION",
    payload: data,
  };
};

const resultSumFunction = (data) => {
  return {
    type: "RESULT_SUM_FUNCTION",
    payload: data,
  };
};

const writeDataForDisplay = () => {
  return {
    type: "WRITE_DATA_FOR_DISPLAY",
  };
};

const toggleVisibleResult = () => {
  return {
    type: "TOGGLE_VISIBLE_RESULT",
  };
};

const dataRequested = () => {
  return {
    type: "DATA_REQUESTED",
  };
};

const dataError = () => {
  return {
    type: "DATA_ERROR",
  };
};

export {
  dollarRateLoaded,
  inputSumFunction,
  resultSumFunction,
  writeDataForDisplay,
  toggleVisibleResult,
  dataRequested,
  dataError,
};
