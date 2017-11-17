function loginData(state = null, action) {
  switch (action.type) {
    case "USER_CREDENTIALS":
      return {
        ...state,
        userObject: {
          email: action.payload.email,
          password: action.payload.password,
          test: "test"
        }
      };
      break;
  }
  return state;
}

export default loginData;
