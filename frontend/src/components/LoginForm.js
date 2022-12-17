import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ onLoginFormSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var result_login = onLoginFormSubmit({ username, password });
    if (result_login == true) {
      //  window.location.href = "/dashboard";
    }
  };

  const onUsernameChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <form
      className="bg-white shadow-xl shadow-2xl lg:shadow-lg rounded px-10 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <div className="container">
        <div className="flex justify-center items-center mt-5 ">
          <img src="/img/qrcapital_logo.png" />
        </div>

        <div>
          <div className="relative my-8">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={onUsernameChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-lg border-2 text-gray-900 bg-transparent rounded-lg border-gray-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-blue-500 focus:outline-1 focus:ring-0 focus:border-blue-900 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="username"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Username
            </label>
          </div>

          <div className="relative my-8">
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={onPasswordChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-2xl focus:ring-0 focus:border-blue-900 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-5 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-600 hover:shadow-none"
          >
            Login
          </button>
        </div>

        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
          <a href="forgot-password" className="flex-2 underline">
            Forgot password?
          </a>

          <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
            or
          </p>

          <Link to={"/register"} className="underline flex-2">
            Create New Account
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
