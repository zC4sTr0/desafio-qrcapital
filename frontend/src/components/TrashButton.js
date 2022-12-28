import React from "react";
import TrashIcon from "./Icons/TrashIcon";

const TrashButton = ({ onDeleteButtonClick }) => {
  return (
    <div className="flex justify-end items-center ">
      <span
        className="text-red-700 hover:text-white cursor-pointer border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-2xl text-sm px-2 py-2 text-center"
        onClick={onDeleteButtonClick}
      >
        <div className="place-items-center">
          <TrashIcon />
        </div>
      </span>
    </div>
  );
};

export default TrashButton;
