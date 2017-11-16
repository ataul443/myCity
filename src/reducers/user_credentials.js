function userData(state = null, action) {
  switch (action.type) {
    case "USER_CREDENTIALS":
      return {
        username: "test@gmail.com",
        password: "12345"
      };
      break;
  }
  return state;
}

export default userData;
