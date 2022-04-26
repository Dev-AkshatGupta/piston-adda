const initialState = {
  users: [],
};
function reducer(state, action) {

  switch (action.type) {
    case "USERS_DATA":
      return { ...state, users: action.payload };
    default:
      return {...state};
      
  }
}
export { reducer, initialState };
