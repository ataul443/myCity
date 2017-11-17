import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginFormReducer from "./login_form_reducer";

const allreducer = combineReducers({
  form: formReducer,
  userObject: loginFormReducer,
  test: "TEST"
});

export default allreducer;
