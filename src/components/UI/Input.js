import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-center justify-between">
        <label html={props.id} className="text-Marine_blue font-medium text-lg">
          {props.label}
        </label>
        {props.error && (
          <p className="text-Strawberry_red">This field is required</p>
        )}
      </div>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={`py-2 px-4 border text-Marine_blue font-medium text-lg border-Light_gray rounded-lg focus:border-Purplish_blue ${
          props.error && "border-Strawberry_red"
        }`}
      />
    </div>
  );
};

export default Input;
