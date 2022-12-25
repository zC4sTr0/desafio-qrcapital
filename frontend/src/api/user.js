import axiosInstance from "./axios";

async function loginUser(credentials) {
  var return_Login;
  await axiosInstance
    .post("/login", credentials)
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

export { loginUser, registerUser, checkUsernameAvaiable, checkEmailAvaiable };
