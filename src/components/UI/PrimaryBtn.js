import React from "react";

const PrimaryBtn = (props) => {
  return (
    <div
      className={`flex items-center justify-end md:absolute lg:right-0 lg:bottom-6 md:bottom-20 right-[4%] bottom-10 ${props.className}`}
    >
      <button
        className={`bg-Marine_blue hover:opacity-80 text-White font-normal rounded-md py-2 px-6 text-lg md:text-xl cursor-pointer disabled:cursor-not-allowed ${props.className}`}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
