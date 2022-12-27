import axiosInstance from "./axios";

async function authenticate() {
  var requestAuthResponse;
  await axiosInstance
    .get("/auth", { withCredentials: true })
    .then((response) => {
      requestAuthResponse = response;
    })
    .catch((error) => {
      requestAuthResponse = error;
    });
  return requestAuthResponse;
}
export default authenticate;
