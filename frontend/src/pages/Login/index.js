import React from "react";

import LoginForm from "../../components/LoginForm";

const onUserLogin = (data) => {
  console.log(data);
  return true;
};

const Login = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-neutral-300 via-gray-200 to-slate-200 flex justify-center items-center w-full">
      <LoginForm onLoginFormSubmit={onUserLogin} />
    </div>
  );
};

export default Login;
