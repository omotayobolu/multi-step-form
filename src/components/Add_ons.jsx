import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "./UI/PrimaryBtn";
import SecondaryBtn from "./UI/SecondaryBtn";

const Add_ons = () => {
  return (
    <section id="add_ons">
      <div>
        <h1>Pick add-ons</h1>
        <p className="pt-3">Add-ons enhance your gaming experience.</p>
        <div className="mt-8 flex flex-col gap-4">
          <div className="add-ons">
            <input type="checkbox" id="" />
            <label className="flex flex-col gap-1 text-left">
              <h2>Online Service</h2>
              <p className="text-base">Access to multiplayer games.</p>
            </label>
            <h5 className="text-Purplish_blue">+$1/mo</h5>
          </div>
          <div className="add-ons">
            <input type="checkbox" id="" />
            <label className="flex flex-col gap-1 text-left">
              <h2>Larger Storage</h2>
              <p className="text-base">Extra 1TB of cloud save.</p>
            </label>
            <h5 className="text-Purplish_blue">+$2/mo</h5>
          </div>
          <div className="add-ons">
            <input type="checkbox" id="" />
            <label className="flex flex-col gap-1 text-left">
              <h2>Customizable Profile</h2>
              <p className="text-base">Customize on your profile.</p>
            </label>
            <h5 className="text-Purplish_blue">+$2/mo</h5>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <Link to="/plans">
            <SecondaryBtn>Go Back</SecondaryBtn>
          </Link>
          <Link to="/summary">
            <PrimaryBtn>Next Step</PrimaryBtn>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Add_ons;
