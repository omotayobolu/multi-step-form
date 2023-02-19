import React from "react";

const SecondaryBtn = (props) => {
  return (
    <div className="absolute flex items-center justify-start bottom-8 left-0">
      <button className="text-Cool_gray font-medium text-lg cursor-pointer hover:text-Marine_blue">
        {props.children}
      </button>
    </div>
  );
};

export default SecondaryBtn;
