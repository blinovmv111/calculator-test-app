const dollarRateLoaded = (newData) => {
  return {
    type: "DOLLAR_RATE_LOADED",
    payload: newData,
  };
};

const inputSumLoaded = (newData) => {
  return {
    type: "INPUT_SUM_LOADED",
    payload: newData,
  };
};

const outputSumLoaded = (newData) => {
  return {
    type: "OUTPUT_SUM_LOADED",
    payload: newData,
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
  inputSumLoaded,
  outputSumLoaded,
  toggleVisibleResult,
  dataRequested,
  dataError,
};
