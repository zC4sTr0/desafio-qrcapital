import axios from "axios";

async function sendLoginAttempt(credentials) {
  var result = undefined;
  await axios
    .post("http://localhost:3001/login", credentials)
    .then((response) => {
      console.log("respon3se: ", response);
    })
    .catch((error) => {
      console.log("error: ", error);
      result = error;
    });

  return result;
}

export default sendLoginAttempt;
