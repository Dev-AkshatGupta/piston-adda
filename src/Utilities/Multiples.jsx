const encodedToken = localStorage.getItem("token");

const authHeader = {
  headers: {
    authorization: encodedToken,
    // passing token as an authorization header
  },
};


const passwordRemover=(userObj)=>{
let newObj = {};
for (let keys in userObj) {
  if (keys !== "password") newObj[keys] = userObj[keys];
}
return newObj;
}

export {authHeader,passwordRemover}