export default function userData(user) {
  console.log(user);
  return {
    type: "USER_CREDENTIALS",
    payload: user
  };
}
