function reducer(state, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        firstName: action.payload.foundUser.firstName,
        lastName: action.payload.foundUser.lastName,
        id: action.payload.foundUser._id,
        followers: action.payload.foundUser.followers,
        following: action.payload.foundUser.following,
        bookmarks: action.payload.foundUser.bookmarks,
      };
    case "SIGN_UP":
      return {
        ...state,
        firstName: action.payload.createdUser.firstName,
        lastName: action.payload.createdUser.lastName,
        id: action.payload.createdUser._id,
        followers: action.payload.createdUser.followers,
        following: action.payload.createdUser.following,
        bookmarks: action.payload.createdUser.bookmarks,
      };
      case "CHANGED_USER_DATA":
        return{

        }
        case "SINGLE_USER":
          return action.payload
    default:
      break;
  }
}
const initialState = {
  firstName: "",
  lastName: "",
  id: "",
  followers: [],
  following: [],
  bookmarks: [],
};
export { reducer, initialState };
