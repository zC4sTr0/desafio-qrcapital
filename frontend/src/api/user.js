import axios from "axios";

async function loginUser(credentials) {
  var return_Login;
  await axios
    .post("http://localhost:3001/login", credentials)
    .then((response) => {
      console.dir(response);
      return_Login = response;
    })
    .catch((error) => {
      console.dir(error);
      return_Login = error.response;
    });
  return return_Login;
}

async function registerUser(credentials) {
  var return_register;
  await axios
    .post("http://localhost:3001/register", credentials)
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

  await axios
    .post("http://localhost:3001/username", username)
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

  await axios
    .post("http://localhost:3001/email", email)
    .then((response) => {
      returnEmailCheck = response;
    })
    .catch((error) => {
      returnEmailCheck = error.response;
    });
  return returnEmailCheck;
}

export { loginUser, registerUser, checkUsernameAvaiable, checkEmailAvaiable };
