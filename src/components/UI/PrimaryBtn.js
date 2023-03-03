import React from "react";

const PrimaryBtn = (props) => {
  return (
    <div
      className={`flex items-center justify-end absolute right-0 bottom-6 ${props.className}`}
    >
      <button
        className="bg-Marine_blue hover:opacity-80 hover:bg-Purplish_blue text-White font-normal rounded-md py-2 px-6 text-lg cursor-pointer disabled:cursor-not-allowed"
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
