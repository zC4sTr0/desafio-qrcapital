import React from "react";

const InputLabel = ({ labelName, id, type, value, name, onChange }) => {
  return (
    <div className="relative my-8">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="block px-2.5 pb-2.5 pt-4 w-full text-lg border-2 text-gray-900 bg-transparent rounded-lg border-gray-300 appearance-none dark:text-white dark:border-green-600 dark:focus:border-blue-500 focus:outline-1 focus:ring-0 focus:border-blue-900 peer"
        placeholder=" "
        required
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {labelName}
      </label>
    </div>
  );
};

export default InputLabel;
