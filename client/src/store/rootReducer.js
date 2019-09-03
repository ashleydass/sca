import { combineReducers } from "redux";

const INITIAL_STATE = {
  submitSuccess: null
}

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        submitSuccess: true
      };
    case "SUBMIT_FAILED":
      return {
        ...state,
        submitSuccess: false
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;