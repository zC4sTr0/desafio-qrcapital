import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-neutral-300 via-gray-200 to-slate-200 flex justify-center items-center w-full">
      <div className="bg-white shadow-xl shadow-2xl lg:shadow-lg rounded px-10 pt-6 pb-8 mb-4">
        <div className="flex justify-center items-center mt-5 ">
          <img src="/img/qrcapital_logo.png" />
        </div>
        <div class="py-4 px-8 text-black text-xl border-b border-grey-lighter">
          Join our community
        </div>
      </div>
    </div>
  );
};

export default Register;
