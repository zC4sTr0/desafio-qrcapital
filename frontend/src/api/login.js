import axios from "axios";

const sendLoginAttempt = async (credentials) => {
  const response = await axios.post("http://localhost:3001/login", credentials);
  return response.data;
};

export default sendLoginAttempt;
