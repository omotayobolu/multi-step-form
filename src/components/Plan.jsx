import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SecondaryBtn from "./UI/SecondaryBtn";
import PrimaryBtn from "./UI/PrimaryBtn";
import FormContext from "../store/FormContext";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";

const Plan = () => {
  const { option, changeOption, selectedPlan, setSelectedPlan } =
    useContext(FormContext);

  const planSelectionHandler = (plan) => {
    setSelectedPlan(plan);
    console.log(plan);
  };

  return (
    <section id="plans">
      <div>
        <h1>Select your plan</h1>
        <p className="pt-3">
          You have the option of monthly or yearly billing.
        </p>
        <div className="mt-12 flex flex-row gap-8">
          <button
            className="select-plan"
            onClick={() => planSelectionHandler("Arcade")}
          >
            <img src={Arcade} alt="" />
            <div className="mt-12 flex flex-col gap-1">
              <h2>Arcade</h2>
              <span>{option ? "$9/mo" : "$90/mo"}</span>
              {!option && <h5>2 months free</h5>}
            </div>
          </button>
          <button
            className="select-plan"
            onClick={() => planSelectionHandler("Advanced")}
          >
            <img src={Advanced} alt="" />
            <div className="mt-12 flex flex-col gap-1">
              <h2>Advanced</h2>
              <span>{option ? "$12/mo" : "$120/yr"}</span>
              {!option && <h5>2 months free</h5>}
            </div>
          </button>
          <button
            className="select-plan"
            onClick={() => planSelectionHandler("Pro")}
          >
            <img src={Pro} alt="" />
            <div className="mt-12 flex flex-col gap-1">
              <h2>Pro</h2>
              <span>{option ? "$15/mo" : "$150/yr"}</span>
              {!option && <h5>2 months free</h5>}
            </div>
          </button>
        </div>
        <div className="w-full bg-Alabaster py-4 rounded-md flex flex-row gap-8 justify-center items-center mt-12">
          <h2
            className={`cursor-pointer ${
              option ? "text-Marine_blue" : "text-Cool_gray"
            }`}
            onClick={changeOption}
          >
            Monthly
          </h2>

          <div
            className={`w-[40px] h-[20px] bg-Marine_blue flex  
            ${option ? "justify-start" : "justify-end"}
             items-center cursor-pointer rounded-full p-1`}
            onClick={changeOption}
          >
            <div className="bg-white rounded-[50%] h-[13px] w-[13px]"></div>
          </div>
          <h2
            className={` ${
              option ? "text-Cool_gray" : "text-Marine_blue"
            } cursor-pointer`}
            onClick={changeOption}
          >
            Yearly
          </h2>
        </div>
        <div className="flex flex-row justify-between">
          <Link to="/personal">
            <SecondaryBtn>Go Back</SecondaryBtn>
          </Link>
          <Link to="/add-ons">
            <PrimaryBtn disabled={!selectedPlan}>Next Step</PrimaryBtn>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Plan;
