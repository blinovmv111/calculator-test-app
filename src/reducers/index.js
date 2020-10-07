const initialState = {
  dollarRate: 0,
  inputSum: 0,
  outputSum: 0,
  visibleResult: false,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DOLLAR_RATE_LOADED":
      return {
        ...state,
        dollarRate: action.payload,
        loading: !state.loading,
      };
    case "INPUT_SUM_LOADED":
      return {
        ...state,
        inputSum: action.payload,
      };
    case "OUTPUT_SUM_LOADED":
      return {
        ...state,
        outputSum: action.payload,
      };
    case "TOGGLE_VISIBLE_RESULT":
      return {
        ...state,
        visibleResult: true,
      };
    case "DATA_REQUESTED":
      return {
        ...state,
        loading: true,
      };
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
