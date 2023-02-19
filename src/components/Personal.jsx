import React from "react";
import Input from "./UI/Input";
import { Link } from "react-router-dom";
import PrimaryBtn from "./UI/PrimaryBtn";

const Personal = () => {
  return (
    <section id="personal">
      <div>
        <h1>Personal info</h1>
        <p className="pt-2 text-Cool_gray">
          Please provide your name, email address and phone number.
        </p>
        <form className="mt-10 flex flex-col gap-4">
          <Input
            label="Name"
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
          />
          <Input
            label="Email Address"
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <Input
            label="Phone Number"
            type="tel"
            id="phone"
            placeholder="e.g. +1 234 567"
          />
        </form>
        <Link to="/plans">
          <PrimaryBtn>Next Step</PrimaryBtn>
        </Link>
      </div>
    </section>
  );
};

export default Personal;
