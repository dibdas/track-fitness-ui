import { measurement } from "../actions/api";
import { errormeasure,successmeasure, SUCCESS_MEASUREMENT, ERROR_MEASUREMENT } from "../actions/constant";

  const defaultState = { measurement: {}, status: Measurement, error: null };
  const measurementReducer = (state = defaultState, action) => {
    switch (action.type) {
      case SUCCESS_MEASUREMENT:
        return {
          ...state,
          status: SUCCESS,
          exercise: action.data,
          error: null,
        };
      case ERROR_MEASUREMENT:
        return {
          ...state,
          status: SUCCESS,
          exercise: action.data,
          error: null,
        };
    }
  };
  export default measurementReducer;
  