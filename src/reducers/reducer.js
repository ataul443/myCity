import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const allreducer = combineReducers({
  form: formReducer
});

export default allreducer;
