function loginData(state = null, action) {
  switch (action.type) {
    case "USER_CREDENTIALS":
      return {
        ...state,
        email: action.email,
        password: action.password
      };
      break;
  }
  return state;
}

export default loginData;
