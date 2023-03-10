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

  const planSelectionHandler = (plan, price) => {
    setSelectedPlan(plan, price);
    console.log(plan, price);
  };

  return (
    <section id="plans">
      <div className="bg-white drop-shadow-2xl lg:drop-shadow-none lg:m-0 lg:p-0  md:mt-[-40%] mt-[-5%] mx-[4%] p-[5%] rounded-lg z-10">
        <h1>Select your plan</h1>
        <p className="pt-3">
          You have the option of monthly or yearly billing.
        </p>
        <div className="mt-12 flex md:flex-row flex-col md:gap-8 gap-4">
          <button
            className="select-plan"
            onClick={() => planSelectionHandler(["Arcade", 9])}
          >
            <img src={Arcade} alt="" />
            <div className="md:mt-8 flex flex-col gap-1">
              <h2>Arcade</h2>
              <span>{option ? "$9/mo" : "$90/mo"}</span>
              {!option && <h5>2 months free</h5>}
            </div>
          </button>
          <button
            className="select-plan"
            onClick={() => planSelectionHandler(["Advanced", 12])}
          >
            <img src={Advanced} alt="" />
            <div className="md:mt-8 flex flex-col gap-1">
              <h2>Advanced</h2>
              <span>{option ? "$12/mo" : "$120/yr"}</span>
              {!option && <h5>2 months free</h5>}
            </div>
          </button>
          <button
            className="select-plan"
            onClick={() => planSelectionHandler(["Pro", 15])}
          >
            <img src={Pro} alt="" />
            <div className="md:mt-8 flex flex-col gap-1">
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
      </div>
      <div className="flex flex-row justify-between mt-20 pb-8 mx-[4%]">
        <Link to="/personal">
          <SecondaryBtn>Go Back</SecondaryBtn>
        </Link>
        <Link to="/add-ons">
          <PrimaryBtn disabled={selectedPlan.length === 0}>
            Next Step
          </PrimaryBtn>
        </Link>
      </div>
    </section>
  );
};

export default Plan;
