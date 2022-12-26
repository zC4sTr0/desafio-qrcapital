import React from "react";
import Spinner from "../components/Spinner";
import ErrorIcon from "./Icons/ErrorIcon";
import SuccessIcon from "./Icons/SuccessIcon";

const InputLabel = ({
  labelName,
  id,
  type,
  pattern,
  value,
  name,
  onChange,
  status,
  errorMessage,
}) => {
  function renderStatusIcon() {
    if (status === "loading") {
      return (
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
          <Spinner />
        </div>
      );
    }
    if (status === "error") {
      return (
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
          <ErrorIcon />
        </div>
      );
    }

    if (status === "success") {
      return (
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
          <SuccessIcon />
        </div>
      );
    }
  }

  function renderInputBorderByStatus() {
    if (status === "error") {
      return "border-red-400 outline-red-500";
    }

    if (status === "success") {
      return "border-green-400 outline-green-500 ";
    }
    // default input border color
    return " border-grey-500 outline-grey-400 ";
  }

  //render error message color
  function renderMessageFont() {
    if (status === "error") {
      return "text-red-400 text-sm";
    }
    if (status === "success") {
      return "text-green-500";
    }
    if (status === "loading") {
      return "text-green-500 text-xs";
    }
  }

  return (
    <div className="w-[300px] ">
      <div className={errorMessage ? "relative my-4" : "relative my-8"}>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          pattern={pattern}
          className={`${renderInputBorderByStatus()} border-2 bg-transparent px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 rounded-xl peer`}
          placeholder=" "
          required
        ></input>
        {renderStatusIcon()}
        <label
          htmlFor={name}
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-3 peer-focus:text-grey-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          {labelName}
        </label>
      </div>
      <p
        id="outlined_error_help"
        className={`${renderMessageFont()} font-bold `}
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default InputLabel;
