import React from "react";

const PrimaryBtn = (props) => {
  return (
    <div className="w-full flex items-center justify-end absolute bottom-8 ">
      <button className="bg-Marine_blue text-White font-normal rounded-md py-2 px-6 text-lg">
        {props.children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
