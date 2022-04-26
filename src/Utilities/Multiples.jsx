const encodedToken = localStorage.getItem("token");
const authHeader = {
  headers: {
    authorization: encodedToken,
    // passing token as an authorization header
  },
};
export {authHeader}