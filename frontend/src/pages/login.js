import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
      <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
        <Link to={"/register"}> ir para registrar </Link>
        <h1>Login Page</h1>
      </div>
    </div>
  );
};

export default Login;
