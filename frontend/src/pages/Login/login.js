import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="h-screen bg-gradient-to-r from-neutral-900 via-gray-900 to-slate-700 flex justify-center items-center w-full">
      <div>
        <form class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div class="container px-4 mx-auto">
            <div class="bg-white rounded-lg shadow-md lg:shadow-lg">
              <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                Login
              </h2>

              <form class="mt-10" method="POST">
                <label
                  for="email"
                  class="block text-xs font-semibold text-gray-600 uppercase"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="e-mail address"
                  autocomplete="email"
                  class="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />

                <label
                  for="password"
                  class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="password"
                  autocomplete="current-password"
                  class="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                  required
                />

                <button
                  type="submit"
                  class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
                >
                  Login
                </button>

                <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                  <a href="forgot-password" class="flex-2 underline">
                    Forgot password?
                  </a>

                  <p class="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                    or
                  </p>

                  <a href="register" class="flex-2 underline">
                    Create an Account
                  </a>
                </div>
              </form>
            </div>
          </div>
          <Link to={"/register"}> ir para registrar </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
