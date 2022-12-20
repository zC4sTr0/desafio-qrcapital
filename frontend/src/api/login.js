import axios from "axios";

async function sendLoginAttempt(credentials) {
  var return_Login;
  await axios
    .post("http://localhost:3001/login", credentials)
    .then((response) => {
      return_Login = response;
    })
    .catch((error) => {
      return_Login = error;
    });
  return return_Login;
}

export default sendLoginAttempt;
