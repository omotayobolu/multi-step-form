import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <label html={props.id} className="text-Marine_blue font-medium text-lg">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className="py-2 px-4 border text-Marine_blue font-medium text-lg border-Light_gray rounded-lg focus:border-Purplish_blue"
      />
    </div>
  );
};

export default Input;
