import axiosInstance from "./axios";

async function loginUser(credentials) {
  var return_Login;
  await axiosInstance
    .post("/login", credentials, { withCredentials: true }) // withCredentials: true is needed to send the cookie
    .then((response) => {
      return_Login = response;
    })
    .catch((error) => {
      return_Login = error.response;
    });
  return return_Login;
}

async function registerUser(credentials) {
  var return_register;
  await axiosInstance
    .post("/register", credentials)
    .then((response) => {
      return_register = response;
    })
    .catch((error) => {
      return_register = error.response;
    });
  return return_register;
}

async function checkUsernameAvaiable(username) {
  var returnUsernameCheck;

  await axiosInstance
    .post("/username", username)
    .then((response) => {
      returnUsernameCheck = response;
    })
    .catch((error) => {
      returnUsernameCheck = error.response;
    });

  return returnUsernameCheck;
}

async function checkEmailAvaiable(email) {
  var returnEmailCheck;
  await axiosInstance
    .post("/email", email)
    .then((response) => {
      returnEmailCheck = response;
    })
    .catch((error) => {
      returnEmailCheck = error.response;
    });
  return returnEmailCheck;
}

async function logoutUser() {
  var return_logout;
  await axiosInstance
    .get("/logout", { withCredentials: true })
    .then((response) => {
      return_logout = response;
    })
    .catch((error) => {
      return_logout = error.response;
    });
  return return_logout;
}

async function addUserCoin(coin) {
  var return_addCoin;
  await axiosInstance
    .post("/user/addCoin", coin, { withCredentials: true })
    .then((response) => {
      return_addCoin = response;
    })
    .catch((error) => {
      return_addCoin = error.response;
    });
  return return_addCoin;
}

export {
  loginUser,
  registerUser,
  checkUsernameAvaiable,
  checkEmailAvaiable,
  logoutUser,
  addUserCoin,
};
