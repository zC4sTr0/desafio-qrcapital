import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div class="h-screen bg-gradient-to-br from-fuchsia-900 to-violet-700 flex justify-center items-center w-full">
      <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
        <h1>Register Page</h1>
        <Link to={"/"}> ir para login </Link>
      </div>
    </div>
  );
};

export default Register;
