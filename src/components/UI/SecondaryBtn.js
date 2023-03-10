import React from "react";

const SecondaryBtn = (props) => {
  return (
    <div
      className={`md:absolute flex items-center justify-star lg:left-0 lg:bottom-6 md:bottom-20 left-[4%] bottom-10 ${props.className}`}
    >
      <button className="text-Cool_gray font-medium text-lg md:text-xl cursor-pointer hover:text-Marine_blue py-2">
        {props.children}
      </button>
    </div>
  );
};

export default SecondaryBtn;
