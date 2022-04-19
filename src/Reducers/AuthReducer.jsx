const reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        firstName: action.payload.createdUser.firstName,
        id: action.payload.createdUser.id,
      };

    case "LOG_IN":
      return {
        ...state,
        firstName: action.payload.foundUser.firstName,
        id: action.payload.foundUser._id,
      };

    default:
      break;
  }
};
const authInitialState = {
  firstName: "",
  id: "",
  token: "",
};
export { reducer, authInitialState };
