import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FormContext from "../store/FormContext";
import PrimaryBtn from "./UI/PrimaryBtn";
import SecondaryBtn from "./UI/SecondaryBtn";

const Add_ons = () => {
  const {
    option,
    onlineServiceChecked,
    setOnlineServiceChecked,
    largerStorageChecked,
    setLargerStoragCheceked,
    customizableProfileChecked,
    setCustomizableProfileChecked,
  } = useContext(FormContext);
  return (
    <section id="add_ons">
      <div>
        <h1>Pick add-ons</h1>
        <p className="pt-3">Add-ons enhance your gaming experience.</p>
        <div className="mt-8 flex flex-col gap-4">
          <div
            className={`add-ons ${
              onlineServiceChecked && "border-Purplish_blue bg-Alabaster"
            }`}
            onClick={() =>
              setOnlineServiceChecked((prevChecked) => !prevChecked)
            }
          >
            <div className="flex items-center gap-10">
              <input
                type="checkbox"
                id="Online Service"
                checked={onlineServiceChecked}
              />
              <label className="flex flex-col gap-1">
                <h2>Online Service</h2>
                <p>Access to multiplayer games.</p>
              </label>
            </div>
            <h5 className="text-Purplish_blue">
              {option ? "+$1/mo" : "$10/yr"}
            </h5>
          </div>
          <div
            className={`add-ons ${
              largerStorageChecked && "border-Purplish_blue bg-Alabaster"
            }`}
            onClick={() =>
              setLargerStoragCheceked((prevChecked) => !prevChecked)
            }
          >
            <div className="flex items-center gap-10">
              <input type="checkbox" id="" checked={largerStorageChecked} />
              <label className="flex flex-col gap-1">
                <h2>Larger Storage</h2>
                <p>Extra 1TB of cloud save.</p>
              </label>
            </div>
            <h5 className="text-Purplish_blue">
              {option ? "+$2/mo" : "$20/yr"}
            </h5>
          </div>
          <div
            className={`add-ons ${
              customizableProfileChecked && "bg-Alabaster border-Purplish_blue"
            }`}
            onClick={() =>
              setCustomizableProfileChecked((prevChecked) => !prevChecked)
            }
          >
            <div className="flex items-center gap-10">
              <input
                type="checkbox"
                id=""
                checked={customizableProfileChecked}
              />
              <label className="flex flex-col gap-1">
                <h2>Customizable Profile</h2>
                <p>Customize on your profile.</p>
              </label>
            </div>
            <h5 className="text-Purplish_blue">
              {option ? "+$2/mo" : "$20/yr"}
            </h5>
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
