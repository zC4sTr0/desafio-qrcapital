import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import sendLoginAttempt from "../../api/login";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const onLoginFormSubmit = async (data) => {
    var retorno_api = await sendLoginAttempt(data);
    if (retorno_api.response.status === 401) {
      setErrorMessage(retorno_api.response.data);
    }
    if (retorno_api.response.status === 200) {
      // Login successful
    }
    return retorno_api;
  };

  return (
    <div className="h-screen bg-gradient-to-r from-neutral-300 via-gray-200 to-slate-200 flex justify-center items-center w-full">
      <div className="bg-white shadow-xl shadow-2xl lg:shadow-lg rounded px-10 pt-6 pb-8 mb-4">
        <div className="flex justify-center items-center mt-5 ">
          <img src="/img/qrcapital_logo.png" />
        </div>

        <LoginForm onLoginFormSubmit={onLoginFormSubmit} />
        {errorMessage != "" && (
          <p
            id="outlined_error_help"
            class="mt-2 font-bold text-sm text-red-400 dark:text-red-400"
          >
            {errorMessage}
          </p>
        )}

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
