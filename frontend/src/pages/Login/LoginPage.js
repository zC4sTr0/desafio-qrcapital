import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "../../components/InputLabel";
import { loginUser } from "../../api/user";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var retorno_api = await loginUser({ username, password });
    if (retorno_api.status === 401) {
      setErrorMessage(retorno_api.data);
    }
    if (retorno_api.status === 200) {
      navigate("/dashboard");
    }
    return retorno_api;
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-neutral-300 via-gray-200 to-slate-200 flex justify-center items-center w-full">
      <div className="bg-white shadow-xl shadow-2xl lg:shadow-lg rounded px-10 pt-6 pb-8 mb-4">
        <div className="flex justify-center items-center mt-5 ">
          <img src="/img/qrcapital_logo.png" alt="QR LOGO" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="">
            <InputLabel
              labelName="Username"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={onUsernameChange}
            ></InputLabel>

            <InputLabel
              labelName="Password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onPasswordChange}
            ></InputLabel>
            {errorMessage !== "" && (
              <p
                id="outlined_error_help"
                className="mt-2 font-bold text-sm text-red-400 dark:text-red-400"
              >
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              className="w-full py-3 mt-5 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-600 hover:shadow-none"
            >
              Login
            </button>
          </div>
        </form>

        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
          <Link to={"/forgot-password"} className="flex-2 underline">
            Forgot password?
          </Link>

          <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
            or
          </p>

          <Link to={"/register"} className="underline flex-2">
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
