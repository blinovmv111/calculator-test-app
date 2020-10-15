const initialState = {
  dollarRate: 0,
  inputSum: 0,
  resultSum: 0,
  displayDollarRate: 0,
  displayInputSum: 0,
  displayResultSum: 0,
  visibleResult: false,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "DOLLAR_RATE_LOADED":
    //   return {
    //     ...state,
    //     dollarRate: action.payload,
    //     loading: !state.loading,
    //   };
    case "PUT_DATA":
      return {
        ...state,
        dollarRate: action.payload,
        loading: false,
      };
    case "LOAD_DATA":
      return {
        ...state,
        loading: true,
      };
    case "INPUT_SUM_FUNCTION":
      return {
        ...state,
        inputSum: action.payload,
      };
    case "RESULT_SUM_FUNCTION":
      return {
        ...state,
        resultSum: action.payload,
      };
    case "WRITE_DATA_FOR_DISPLAY":
      return {
        ...state,
        displayDollarRate: state.dollarRate,
        displayInputSum: state.inputSum,
        displayResultSum: state.resultSum,
        loading: false,
      };
    case "TOGGLE_VISIBLE_RESULT":
      return {
        ...state,
        visibleResult: true,
      };
    // case "DATA_REQUESTED":
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    case "DATA_ERROR":
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
